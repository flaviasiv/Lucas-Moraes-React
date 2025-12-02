@echo off
REM Script para comprimir vídeos para iOS
REM Otimizado para web com H.264 Main Profile + AAC

echo ========================================
echo Comprimindo videos para iOS
echo ========================================
echo.

set "SOURCE_DIR=public\assets"
set "BACKUP_DIR=public\assets_backup"

REM Criar backup
if not exist "%BACKUP_DIR%" (
    echo Criando backup dos videos originais...
    xcopy /E /I /Y "%SOURCE_DIR%" "%BACKUP_DIR%"
    echo Backup criado em: %BACKUP_DIR%
    echo.
)

REM Comprimir vídeos do Astropay
echo Comprimindo videos do Astropay...
cd public\assets\astropay

for %%f in (*.mp4) do (
    echo Comprimindo: %%f
    ffmpeg -i "%%f" -c:v libx264 -profile:v main -level 4.1 -crf 28 -preset medium -c:a aac -b:a 128k -movflags +faststart -y "temp_%%f"
    if exist "temp_%%f" (
        move /Y "temp_%%f" "%%f"
        echo   [OK] %%f comprimido
    ) else (
        echo   [ERRO] Falha ao comprimir %%f
    )
)

cd ..\..\..

echo.
echo ========================================
echo Compressao concluida!
echo ========================================
echo Backup dos originais: %BACKUP_DIR%
echo.
pause
