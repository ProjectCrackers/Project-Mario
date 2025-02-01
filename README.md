# - Build README -

## STEP 1: Clone the Repository:

For Git:
1. Open a terminal or command prompt.
2. Run the following command:
    ```bash
    git clone https://github.com/ELedlow-Studios/Mario-Version-2-Executing-Protype-Action-Coding-Kit.git
    cd Mario-Version-2-Executing-Protype-Action-Coding-Kit
    ```
3. Ensure you have [NodeJS](https://nodejs.org/) and [Neutralino](https://neutralino.js.org/) installed.

For GitHub Desktop:
1. Open GitHub Desktop.
2. Click on **File** > **Clone Repository**.
3. In the **URL** tab (or any similar tab in your version), paste the repository URL:
    ```
    https://github.com/ELedlow-Studios/Mario-Version-2-Executing-Protype-Action-Coding-Kit
    ```
4. Click on **Clone**.
5. Navigate to the cloned directory in GitHub Desktop.

## STEP 2: Install NodeJS and Neutralino:

1. Install NodeJS from [nodejs.org](https://nodejs.org/) and follow the setup instructions for your device.
2. Install Neutralino from either [neutralino.js.org]](https://neutralino.js.org/) or run `npm install g neutralino (idk the command sadlu)` once you've installed NodeJS.

## STEP 3: Reprogram the application in the `public/` directory.

[detailed instructions go here. placeholder]

## STEP 4: Test via localhost or 127.0.0.1

1. Install Visual Studio Code on your device or install a similar application.
2. Create a `.vscode/` directory.
3. Create two files, a `desktop.ini` (Windows only) and a `settings.json`.
4. In the `desktop.ini`, copy this code:
    ```ini
    [ViewState]
    Mode=
    Vid=
    FolderType=Generic
    ```
5. In the `settings.json`, copy this code:
    ```json
    {
        "liveServer.settings.port": 5000
    }
    ```
6. Install the **Live Server** extension by [Ritwick Dey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) on VsCode.
7. Right click on a HTML file in the `public/` directory and click the option **"Open with Live Server"**.
8. Go to this link: [http://127.0.0.1:5500/public/](http://127.0.0.1:5500/public/) and watch the magic happen.

Super Mario World ©1990-1991 of Nintendo.
Mar.V2.exe ©2022-2025 of ELedlow Studios.