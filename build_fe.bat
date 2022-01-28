@echo off
set FE_LOCATION="..\fullstack-uni-course\osa2\puhelinluettelo"
set BE_LOCATION=%cd%
if exist build (rmdir /Q /S build)
pushd %FE_LOCATION% & npm run build & robocopy /MIR build %BE_LOCATION%\build & popd