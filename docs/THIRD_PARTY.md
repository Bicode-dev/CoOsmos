# Composants tiers

CoOsmos repose sur Arch Linux. Ce fichier liste ce qui n'est pas écrit par CoOsmos, avec la licence.

| Composant | Rôle | Licence |
|-----------|------|---------|
| Paquets officiels Arch Linux (noyau Linux, systemd, Mesa, firmwares…) | Système de base | Licences respectives (GPL-2.0, LGPL, MIT…) — voir `/usr/share/licenses/` dans l'OS |
| archiso (profil `releng` adapté dans `iso/`) | Construction de l'ISO live | GPL-3.0-or-later |
| syslinux, systemd-boot | Chargeurs de démarrage | GPL-2.0 / LGPL-2.1 |
| Inter (police) | Interface, nom dans le logo | SIL Open Font License 1.1 |
| JetBrains Mono (police) | Terminal | SIL Open Font License 1.1 |
| Montserrat (police) | Nom « CO·OSMOS » du logo | SIL Open Font License 1.1 |
| Terminus (police console) | Console texte | SIL Open Font License 1.1 |
| NumPy, Pillow, librsvg (outils de build) | Calcul du trou noir, assemblage des images | BSD-3 / MIT-CMU / LGPL-2.1 |
| labwc *(palier 2)* | Compositeur Wayland | GPL-2.0 |
| Quickshell *(palier 3)* | Toolkit QML de l'interface | LGPL-3.0 |
| GRUB *(palier 9)* | Chargeur de démarrage du système installé (BIOS et UEFI) | GPL-3.0-or-later |
| os-prober | Détection de Windows pour le double démarrage | GPL-2.0-or-later |
| greetd, cage | Écran de connexion et premier démarrage (compositeur plein écran) | GPL-3.0 / MIT |
| Wine (staging), wine-mono, wine-gecko, VKD3D, winetricks *(palier 6)* | Programmes Windows (Portail) | LGPL-2.1-or-later / MIT / MPL-2.0 / LGPL-2.1 / LGPL-2.1 |
| DXVK (téléchargé à la demande par winetricks) | DirectX 9-11 → Vulkan | zlib |
| GParted, GNOME Disques, GSmartControl, smartmontools, TestDisk/PhotoRec, ddrescue, HardInfo2, inxi, stress-ng, ClamAV, ClamTk *(palier 9 bis)* | Boîte à outils Dépannage | GPL-2.0 / GPL-3.0 |
| Memtest86+ | Diagnostic de la mémoire | GPL-2.0 |
| ufw *(palier 9 ter)* | Pare-feu activé par défaut | GPL-3.0 |
| ClamAV *(palier 9 ter)* | Antivirus de l'app Sécurité | GPL-2.0 |
| cryptsetup (LUKS2), systemd-cryptenroll *(palier 9 ter)* | Chiffrement du disque et clé de récupération | GPL-2.0 / LGPL-2.1 |
| Git, GCC, Make, CMake, GDB *(palier 7)* | Outils de développement installés d'office | GPL-2.0 / GPL-3.0 / BSD-3-Clause |
| Python, pip, virtualenv, Node.js, npm *(palier 7)* | Langages et gestionnaires de paquets | PSF / MIT / Artistic-2.0 |
| Rust, Go, OpenJDK, SQLite, HTTPie *(palier 7)* | Langages, base de données, client HTTP | MIT ou Apache-2.0 / BSD-3-Clause / GPL-2.0 avec exception Classpath / domaine public / BSD-3-Clause |
| Code - OSS *(palier 7)* | Éditeur de code (version libre de VS Code) | MIT |
| wf-recorder *(Outil Capture)* | Enregistrement vidéo de l'écran | MIT |
| BlueZ | Bluetooth (réglages rapides, Paramètres) | GPL-2.0 / LGPL-2.1 |
| gammastep | Éclairage nocturne (teinte de l'écran) | GPL-3.0 |
| brightnessctl | Luminosité de l'écran intégré | MIT |
| uBlock Origin *(extension Firefox, installée d'office)* | Bloqueur de publicités et de pisteurs | GPL-3.0 |
| Privacy Badger *(extension Firefox, installée d'office)* | Protection contre le pistage | GPL-3.0 |
| User-Agent Switcher and Manager *(extension Firefox, installée d'office)* | Bouton « empreinte Windows / Linux » | MPL-2.0 |
| Flutter (moteur et framework) *(Hyperespace)* | Interface de l'app Hyperespace | BSD-3-Clause |
| window_manager, screen_retriever *(Hyperespace)* | Barre de titre dessinée par l'app | MIT |
| file_selector (paquet Dart) *(Hyperespace)* | Boîte « Ouvrir » | BSD-3-Clause |
| cryptography (paquet Dart) *(Hyperespace)* | Vérification de la signature Ed25519 du canal de téléchargement | Apache-2.0 |
| Inter *(Hyperespace, fournie avec l'app pour Windows et macOS)* | Police de l'interface | OFL-1.1 |
| NSIS *(outil de construction, Windows)* | Fabrique le `.exe` portable d'Hyperespace (le petit lanceur NSIS est inclus dans le .exe) | zlib/libpng |
| mingw-w64 (outil de test uniquement) | Compile le programme Windows de test `tests/windows/bonjour.c` | ZPL / GPL |

## Inspirations (aucun code copié)
- **end4 / illogical-impulse** (via le fork `pctrade/end4-pC`, GPL-3.0) : esprit Material, widgets, Quickshell.
- **Windows 11** : disposition de la barre des tâches et du menu Démarrer.
- **Windows 10 / 11** (aspect seulement, rien de copié) : menu Démarrer à tuiles, Paint, Paramètres, écran de
  verrouillage, Contrôle de compte d'utilisateur, « Installation de Windows », OOBE, gestionnaire de démarrage,
  options F8, Sécurité Windows, BitLocker, Dev Home et l'Outil Capture d'écran. Paint est réécrit de zéro : `paint.exe` n'a pas été
  décompilé (logiciel propriétaire).
- **Calculatrice et Windows Terminal** de Microsoft (open source, MIT) : leur code a servi de référence pour les
  mesures et les règles de calcul ; aucun fichier n'en est copié.
- **Polices du menu GRUB** : générées depuis Inter avec `grub-mkfont` (OFL 1.1 : conversion autorisée).
