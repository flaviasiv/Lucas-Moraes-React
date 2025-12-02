#!/bin/bash
# Script para comprimir TODOS os vídeos do projeto para iOS
# Otimizado para web com H.264 Main Profile + AAC

echo "========================================"
echo "Comprimindo todos os videos para iOS"
echo "========================================"
echo ""

SOURCE_DIR="public/assets"
BACKUP_DIR="public/assets_backup"

# Criar backup
if [ ! -d "$BACKUP_DIR" ]; then
    echo "Criando backup dos videos originais..."
    cp -r "$SOURCE_DIR" "$BACKUP_DIR"
    echo "Backup criado em: $BACKUP_DIR"
    echo ""
fi

# Função para comprimir vídeos
compress_videos() {
    local dir=$1
    echo "Comprimindo videos em: $dir"

    for video in "$dir"/*.mp4; do
        if [ -f "$video" ]; then
            filename=$(basename "$video")
            echo "  Comprimindo: $filename"

            ffmpeg -i "$video" \
                -c:v libx264 \
                -profile:v main \
                -level 4.1 \
                -crf 28 \
                -preset medium \
                -c:a aac \
                -b:a 128k \
                -movflags +faststart \
                -y "${video}.temp" 2>&1 | grep -E "frame=|video:|audio:"

            if [ -f "${video}.temp" ]; then
                mv "${video}.temp" "$video"
                echo "    [OK] $filename comprimido"
            else
                echo "    [ERRO] Falha ao comprimir $filename"
            fi
        fi
    done
    echo ""
}

# Comprimir vídeos de todas as pastas
compress_videos "public/assets/astropay"
compress_videos "public/assets/home"
compress_videos "public/assets/botteghe"
compress_videos "public/assets/lata"
compress_videos "public/assets/supernova"
compress_videos "public/assets/buddy"

echo "========================================"
echo "Compressao concluida!"
echo "========================================"
echo "Backup dos originais: $BACKUP_DIR"
echo ""

# Comparar tamanhos
echo "Comparacao de tamanhos:"
echo "Tamanho original:"
du -sh "$BACKUP_DIR"
echo "Tamanho comprimido:"
du -sh "$SOURCE_DIR"
echo ""
