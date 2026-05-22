@echo off
for %%f in (*.jpg *.jpeg *.png) do (
    magick "%%f" -quality 90 "%%~nf.webp"
)
echo Done.
pause