<?php
if (strrchr($_SERVER['HTTP_HOST'], '.') === '.fr')
  require 'french.html';
else
  require 'english.html';
