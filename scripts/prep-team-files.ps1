# Prepares a clean, human-named image set in public/team for blob upload.
# - Copies team headshots that live in public/about (shared assets) under clean names.
# - Renames the numeric NP files (0-9) to human names (only used by the team component).
$ErrorActionPreference = "Stop"
$team = "public\team"
$about = "public\about"

# source (public/about) -> clean name in public/team
$copyFromAbout = [ordered]@{
  "imgi_5_Dr-Sean-Arora.jpg"                        = "sean-arora.jpg"
  "imgi_6_staff1a.jpg"                              = "noah-nelson.jpg"
  "imgi_7_Screen-Shot-2026-01-27-at-1.24.46-PM.png" = "dasan-fant.png"
  "imgi_8_staff2a.jpg"                              = "david-chavez.jpg"
  "imgi_9_Screen-Shot-2026-01-27-at-1.25.19-PM.png" = "reggie-lynch.png"
  "imgi_10_staff3a.jpg"                             = "karl-canniff.jpg"
  "imgi_11_staff4b.jpg"                             = "ben-nelson.jpg"
  "imgi_75_team-McGough-Angelica.jpg"               = "angelica-mcgough.jpg"
  "imgi_26_Screen-Shot-2026-01-31-at-10.39.15-AM.png" = "jared-novack.png"
  "imgi_80_team-Lonergan-Shannon.jpg"               = "shannon-lonergan.jpg"
  "imgi_81_team-Lexi-Taylor.jpg"                    = "lexi-taylor.jpg"
  "imgi_82_team-cathy.jpg"                          = "cathy-wandmacher.jpg"
  "imgi_83_team-Dani-Headshot.jpg"                  = "danielle-kreienbrink.jpg"
  "imgi_84_team-Feddo-Emma.jpg"                     = "emma-feddo.jpg"
}

# numeric file in public/team -> clean name
$renameNumeric = [ordered]@{
  "0.jpg" = "shina-chase.jpg"
  "1.jpg" = "dana-cook.jpg"
  "2.jpg" = "susan-kelly.jpg"
  "3.jpg" = "nicole-stroop.jpg"
  "4.jpg" = "deanna-kaup.jpg"
  "5.png" = "kefah-mazloum.png"
  "6.jpg" = "robyn-rafter.jpg"
  "7.jpg" = "shayne-yocum.jpg"
  "8.jpg" = "danielle-cory.jpg"
  "9.png" = "natalie-chovan-hahn.png"
}

foreach ($src in $copyFromAbout.Keys) {
  $s = Join-Path $about $src
  $d = Join-Path $team $copyFromAbout[$src]
  if (Test-Path $s) { Copy-Item $s $d -Force; Write-Host "COPIED $src -> $($copyFromAbout[$src])" }
  else { Write-Host "MISSING SOURCE: $s" }
}

foreach ($src in $renameNumeric.Keys) {
  $s = Join-Path $team $src
  $d = Join-Path $team $renameNumeric[$src]
  if (Test-Path $s) { Move-Item $s $d -Force; Write-Host "RENAMED $src -> $($renameNumeric[$src])" }
  else { Write-Host "MISSING NUMERIC: $s" }
}

Write-Host "`n--- Final public/team image set ---"
Get-ChildItem $team -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|webp|avif|gif)$' } | Select-Object -ExpandProperty Name | Sort-Object
