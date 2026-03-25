# Installing Clank

All apps are available for **Windows** and **macOS**. Pick the app you need and follow the instructions for your preferred install method.

---

## Clank — CLI

An agentic assistant with 14 tools, project memory, and plan/build modes. Works with local models and cloud providers.

### Windows

**One-liner install**
```powershell
irm https://raw.githubusercontent.com/ItsTrag1c/Clank/cli/install.ps1 | iex
```
Downloads the latest release to `%USERPROFILE%\Clank\` and adds it to your PATH. Run with `clank`.

**Installer**
Download `Clank_setup.exe` from [GitHub Releases](https://github.com/ItsTrag1c/Clank/releases/latest). Installs to `C:\Program Files\Clank\` and adds `clank` to your system PATH.

**Standalone EXE**
Download `Clank.exe` from [GitHub Releases](https://github.com/ItsTrag1c/Clank/releases/latest). Run from anywhere — no install needed.

### macOS

Download the `Clank` binary from [GitHub Releases](https://github.com/ItsTrag1c/Clank/releases/latest), make it executable, and move it to your PATH:

```bash
chmod +x Clank
sudo mv Clank /usr/local/bin/clank
```

### Usage

```
clank                # start agent in current directory
clank -c             # continue last session
clank --version      # check version
```

---

## Clank — Desktop

The Clank agent wrapped in a desktop GUI.

### Windows

**Installer (recommended)**
Download `Clank Desktop_x64-setup.exe` from [GitHub Releases](https://github.com/ItsTrag1c/Clank/releases/latest). Installs to `C:\Program Files\Clank Desktop\`.

**MSI**
Download `Clank Desktop_x64_en-US.msi` from [GitHub Releases](https://github.com/ItsTrag1c/Clank/releases/latest) for MSI-based deployment.

### macOS

Download `Clank Desktop_aarch64.dmg` from [GitHub Releases](https://github.com/ItsTrag1c/Clank/releases/latest) and drag to Applications.

---

## Verify Installation

All downloads include a `SHA256SUMS.txt` file on the release page. To verify:

**Windows (PowerShell):**
```powershell
Get-FileHash .\downloaded-file.exe | Format-List
```

**macOS (Terminal):**
```bash
shasum -a 256 downloaded-file
```

Compare the hash with the one in `SHA256SUMS.txt`.

---

## Uninstall

- **Installer/MSI apps (Windows):** Use Windows Settings > Apps > Installed apps, or run the uninstaller from the install directory.
- **One-liner installs (Windows):** Delete the install folder (`%USERPROFILE%\Clank\`) and remove it from your PATH.
- **macOS Desktop:** Drag Clank Desktop from Applications to the Trash.
- **macOS CLI:** Remove the binary (`sudo rm /usr/local/bin/clank`).
- **Standalone binaries:** Just delete the file.

---

For more info, visit [clanklabs.dev](https://clanklabs.dev).
