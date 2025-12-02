# Guia de Compressão de Vídeos para iOS

## Problema Identificado

Vários vídeos estão muito pesados, o que causa problemas no iOS:
- **hero21.mp4**: 89 MB
- **hero10.mp4**: 46 MB
- **hero13.mp4**: 36 MB
- **hero7.mp4, TRANSFER_USDT_9x16_ES.mp4**: 33 MB cada

## Solução: Compressão Otimizada para iOS

### 1. Instalar FFmpeg

#### Windows (Escolha uma opção):

**Opção A - Scoop (Recomendado)**:
```bash
# Instalar Scoop (se não tiver)
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')

# Instalar FFmpeg
scoop install ffmpeg
```

**Opção B - Chocolatey**:
```bash
# Instalar Chocolatey (se não tiver)
# Execute no PowerShell como Administrador

# Instalar FFmpeg
choco install ffmpeg
```

**Opção C - Download Manual**:
1. Baixe em: https://www.gyan.dev/ffmpeg/builds/
2. Extraia para `C:\ffmpeg`
3. Adicione `C:\ffmpeg\bin` ao PATH do sistema

### 2. Executar Compressão

#### Comprimir APENAS Astropay (mais rápido):
```bash
# Windows
compress-videos.bat

# Mac/Linux
chmod +x compress-all-videos.sh
./compress-all-videos.sh
```

#### Comprimir TODOS os vídeos:
```bash
# Mac/Linux
chmod +x compress-all-videos.sh
./compress-all-videos.sh
```

## Configurações de Compressão

Os scripts usam configurações otimizadas para iOS:

```bash
ffmpeg -i video.mp4 \
  -c:v libx264            # Codec H.264
  -profile:v main         # Profile compatível com iOS
  -level 4.1              # Level máximo iOS
  -crf 28                 # Qualidade (18-28 é bom, 28 = menor arquivo)
  -preset medium          # Velocidade de encoding
  -c:a aac                # Codec áudio AAC
  -b:a 128k               # Bitrate áudio
  -movflags +faststart    # Otimiza para streaming
  video_comprimido.mp4
```

## Redução Esperada

- **Vídeos grandes (>30MB)**: Redução de 60-75%
- **Vídeos médios (10-30MB)**: Redução de 50-60%
- **Vídeos pequenos (<10MB)**: Redução de 30-40%

### Exemplos:
- hero21.mp4: 89MB → ~25MB (72% redução)
- hero10.mp4: 46MB → ~15MB (67% redução)
- hero7.mp4: 33MB → ~11MB (67% redução)

## Backup

Os scripts criam automaticamente um backup em `public/assets_backup/` antes de comprimir.

## Verificar Resultados

Após comprimir, compare os tamanhos:

```bash
# Tamanho original
du -sh public/assets_backup

# Tamanho comprimido
du -sh public/assets
```

## Problemas Comuns

### FFmpeg não encontrado
- Verifique se o ffmpeg está no PATH
- Teste: `ffmpeg -version`

### Vídeo não comprime
- Verifique se o arquivo não está corrompido
- Tente abrir o vídeo em um player primeiro

### Qualidade muito baixa
- Ajuste o CRF para um valor menor (ex: 23 em vez de 28)
- Valores menores = melhor qualidade mas arquivos maiores
- CRF 18 = qualidade alta
- CRF 23 = qualidade boa (padrão recomendado)
- CRF 28 = qualidade aceitável, arquivo pequeno

## Compressão Manual (Alternativa)

Se preferir comprimir manualmente um vídeo específico:

```bash
ffmpeg -i public/assets/astropay/hero21.mp4 \
  -c:v libx264 -profile:v main -level 4.1 \
  -crf 28 -preset medium \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  public/assets/astropay/hero21_compressed.mp4
```

Depois substitua o original:
```bash
mv public/assets/astropay/hero21_compressed.mp4 public/assets/astropay/hero21.mp4
```
