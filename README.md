# - Build README -

## STEP 1: Cloning or Forking the Repository:

### Forking (optional, but encouraged)
Click the **"Fork"** button at the top right of the repository on Github and click the option **"Create a new Fork"**. Then follow the cloning instructions.

### Cloning
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

Now you are ready to install **NodeJS** and **Neutralino**.

## STEP 2: Installing NodeJS and Neutralino:

1. Install NodeJS from [nodejs.org](https://nodejs.org/) and follow the setup instructions for your device.
2. Install Neutralino from [neutralinojs.org](https://neutralino.js.org/) or with the following command:
    ```bash
    npm install -g @neutralinojs/neu
    ```

This will take a while, but patience is key.

## STEP 3: Reprogram the Application in the `public/` Directory

1. Navigate to the `public/` directory.
2. Get to know the files:
    a. The `audio/` directory: 
       - This directory contains all the audios used in the game, such as the **jump** sound or the **death** sound. 
       - They are all either `.mp3`, `.wav`, or `.ogg` audios.
       - The subdirectory `audio/music/` contains all of the background music used in the game, such as **the overworld**.

    b. The `css/` directory:
       - This contains the styles used in the main `index.html` file. 
       - It is not recommended to edit these unless you know what you are doing.

    c. The `img/` directory:
       - This contains all the images used in the game, either for **backgrounds**, **sprites**, **loading screens**, and even **easter eggs**.
       - The subdirectories are initials of the games the images are from. For example, the `SMW/` directory stands for **Super Mario World**.
       - The `Page/` directory contains images used by the `index.html` and the `neu-index.html` files.
       - The `Messages/` directory was originally used for communication, but was discarded and is now just an archive of version history.

    d. The `js/` directory:
       - This contains all the files used for the application to run.
       - The subdirectories are useful for specific bundles of scripts and grouping.
       - It **is not** recommended to rename any of the files or to re-order them as they are very strictly linked together.
       - The `mods/` directory is the only exception as it is not strictly linked and can accept files easily with only a few modifications to files like `main.js`.
       - The `entities/` directory is also easy to modify as you can easily import new entities.
       - There is a README here specifically for helping with entity creation.

    e. The `levels/` directory:
       - This contains all of the **JSON** files specifically used for building levels.
       - There is a README here specifically for helping with level creation.
       - The debug levels were purely tests.

    f. The `music/` directory:
       - This contains all of the **JSON** files specifically used for loading music within levels.
       - The README in the `levels/` directory talks about this in more detail.
       - The `silent.json` will throw an error as it plays a non-existent audio to keep it silent. However, the program will still run as normal, so ignore the errors received in the console.

    g. The `sounds/` directory:
       - This contains all of the **JSON** files used for entity sounds.
       - The README in the `entities/` directory talks about this in more detail.
       - All silent entities use no audios as using a silent audio JSON would cause an uncaught error and freeze the game (unless the audio isn't actively being played).

    h. The `sprites/` directory:
       - This contains all of the **JSON** files used for entity, tile, and background sprites.
       - The `patterns/` directory is specifically for patterns only.
       - There is a README here specifically for helping with sprite creation.

    i. The `404.html` file:
       - This was originally created for **GitHub Pages** if a user went to an incorrect page. 
       - However, it became scrapped as GitHub does not support ES6 modules and JsDelivr won't link consistently.

    j. The `favicon.ico` file:
       - This is used for local developments.

    k. The `icon.ico` file:
       - This was used for the Neutralino build, but the file is not an ICO file and is incompatible currently.

    l. The `index.html` file:
       - This is the root file for the `public/` directory and is tailor-made for local testing on most devices.
       - This file is not compatible with the following browsers:
           1. Safari on iOS
           2. Chrome on iOS, Android, and older versions of ChromeOS
           3. Internet Explorer
           4. Firefox on iOS and Android
           5. Edge on iOS
       - This file is not compatible with the following operating systems:
           1. iOS: The only workaround is to have installed extra apps on the **Apple App Store** or have homebrewed your device.
           2. Android: The only workaround is to have installed Edge and have extra command-line apps from the **Google Play Store**.

    m. The `neu-index.html` file:
       - This is the root file used within the final build of the application.

3. Read the README files.
    Before getting directly into my spaghetti code, make sure to read all of the **README** files in their specific directories.
    If there are things you don't understand, or information that is missing, please create a **GitHub Issue** or contact me on **Scratch**.
4. Understand the `.gitignore`.
    The `.gitignore` is very specific to prevent overloads, duplicated files, or exposure of private or unused files:
    - We ignore dependency directories like `node_modules/` because the number of files can overload git and be too large to commit to GitHub.
    - We ignore distribution files like `out/` and `dist/` as they generally contain build or release files. However, these directories were only used when Mar.v2.exe used **Chromium**.
    - We ignore environment files like `.env` because they usually contain hidden information like API keys or passwords. We no longer use `.env` files as we have no need anymore, but we kept it just in case.
    - We ignore the `.vscode/` settings directory because not everyone uses VS Code as their default editor.
    - We ignore all unused directories and files because they take up space and clutter the repository.
    - We ignore private files as they usually contain private information like debugs, scripts, and even certain easter eggs that we only include in the final builds. This includes the `DEVREADME.md` file.
    - We ignore pending directories and files as they are usually beta tests to see if certain aspects of the application work. This is a general practice in **ELedlow Studios**.
    - We ignore the Neutralino files as they generally contain the build files that will be compressed into the `resources.neu` file or the configuration files that help build the application.
    - We ignore the zip archives as they contain specific build files or bundles.
5. Understand the `package.json`:
    This file contains all the information for npm and node to run properly:
    - The **"name"** is the name of the package or the application.
    - The **"version"** (e.g., "7.5.0") is the version state of the application, which helps keep track of updates.
    - The **"description"** is the description of the package if it was uploaded to [NPM](https://npmjs.com/) or any similar site.
    - The **"main"** is the file that the package indexes when it is uploaded to [NPM](https://npmjs.com/) so that way it has a referral. However, there is no main file in this repository as there is no need for it.
    - The **"scripts"** (e.g., `"test": "echo \"Error: No test specified.\"",`) are the scripts you can run via command-line in a tool like PowerShell.
    - The **"keywords"** are the key terms that [NPM](https://npmjs.com/) uses when people try to search for your package or are trying to install it.
    - The **"author"** (e.g., "John Doe") is the name of the person (or team) who created and contributed to this repository.
    - The **"license"** ("CC-BY-NC-4.0") is what tells people what they can and cannot do in your code. The repository is licensed under **"CC-BY-NC-4.0"**, which stands for Creative Commons Attribution-NonCommercial 4.0 International. This license allows others to share and adapt the work as long as they give appropriate credit and do not use it for commercial purposes.
    - The **"dependencies"** directory is created by NPM when you install certain packages. It is not recommended to change these unless you know what you are doing.

Now that you know what to do, **start programming.**

## STEP 4: Test via localhost or 127.0.0.1 (optional)

1. Install Visual Studio Code (VS Code) on your device or a similar application.
2. Create a `.vscode/` directory within your project directory.
3. Create a `settings.json` file in the `.vscode/` directory.
4. In the `settings.json`, copy this code:
    ```json
    {
        "liveServer.settings.port": 5000
    }
    ```
5. Install the **Live Server** extension by [Ritwick Dey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) on VS Code.
6. Right-click on the `index.html` file (not the others) in the `public/` directory and select the option **"Open with Live Server"**.
7. Go to this link: [http://127.0.0.1:5000/public/](http://127.0.0.1:5000/public/) and watch the magic happen.

Now you are ready to build the application.

## STEP 5: Pre-building

1. Create the empty `Mar.V2.exe.pack/` directory.
2. Run the command `neu create myapp --template neutralinojs/neutralinojs-zero`.
3. Ensure you directory looks similar to this:
    ```cmd
    Mar.V2.exe.pack/
    ├─── .github/
    │   └─── FUNDING.yml
    ├─── bin/
    ├─── dist/
    ├─── www/
    ├─── .gitignore
    ├─── neutralino.config.json
    ├─── README.md
    └─── LICENSE
    ```
4. Edit the `neutralino.config.json` file and make it look similar to this:
    ```json
    {
        "applicationId": "com.your-team.mario",
        "version": "7.5.0.example.1",
        "defaultMode": "window",
        "port": 0,
        "documentRoot": "/public/",
        "url": "/neu-index.html",
        "enableServer": true,
        "enableNativeAPI": true,
        "tokenSecurity": "one-time",
        "logging": {
            "enabled": true,
            "writeToLogFile": true
        },
        "nativeAllowList": [
            "app.*",
            "os.*",
            "debug.log",
            "filesystem.readBinaryFile",
            "filesystem.writeBinaryFile",
            "filesystem.readFile",
            "filesystem.writeFile",
            "window.*"
        ],
        "modes": {
            "window": {
            "title": "Mario",
            "width": 800,
            "height": 500,
            "minWidth": 400,
            "minHeight": 200,
            "center": true,
            "fullScreen": false,
            "alwaysOnTop": false,
            "icon": "/public/icon.ico",
            "enableInspector": true,
            "borderless": false,
            "maximize": false,
            "hidden": false,
            "resizable": true,
            "exitProcessOnClose": false
            },
            "browser": {
            "globalVariables": {
                "NL_ARGS": ""
            },
            "nativeBlockList": [
                "filesystem.*"
            ]
            },
            "cloud": {
            "url": "/resources/#cloud",
            "nativeAllowList": [
                "app.*"
            ]
            },
            "chrome": {
            "width": 800,
            "height": 800,
            "args": "--user-agent=\"Neutralinojs chrome mode\"",
            "nativeBlockList": []
            }
        },
        "cli": {
            "binaryName": "Mario",
            "resourcesPath": "/public/",
            "extensionsPath": "/extensions/",
            "clientLibrary": "/public/neutralino.js",
            "binaryVersion": "5.3.0",
            "clientVersion": "5.3.0"
        },
        "applicationName": "Mario",
        "applicationIcon": "/public/icon.ico",
        "singlePageServe": true
    }
    ```
5. Create a `LICENSES/` directory and move the Neutralino license, our license and your own License (if necessary) into there.
    ```cmd
    Mar.V2.exe.pack/
    ├─── .github/
    │   └─── FUNDING.yml
    ├─── bin/
    ├─── dist/
    ├─── LICENSES/
    │   ├─── NEU-LICENSE
    │   ├─── MAR.V2.EXE-LICENSE.md
    │   └─── YOUR-LICENSE.text
    ├─── www/
    ├─── .gitignore
    ├─── neutralino.config.json
    ├─── README.md
    └─── LICENSE.md
    ```
6. Rename `www/` to `public/` and copy all of the content from the root `public/` directory into the new one.
    ```cmd
    Mar.V2.exe.pack/
    ├─── .github/
    │   └─── FUNDING.yml
    ├─── bin/
    ├─── dist/
    ├─── LICENSES/
    │   ├─── NEU-LICENSE
    │   ├─── MAR.V2.EXE-LICENSE.md
    │   └─── YOUR-LICENSE.text
    ├─── public/
    ├─── .gitignore
    ├─── neutralino.config.json
    ├─── README.md
    └─── LICENSE.md
    ```
7. Add new stuff to the Mar.V2.exe.pack `.gitignore` file.
    ```gitignore
    # Unused bin
    www/

    # MSI development files
    msi-dev/
    ```
8. Install [MSILid4](https://github.com/dkxce/MSILid4Exe) from Github (optional).
    ```cmd
    Mar.V2.exe.pack/
    ├─── .github/
    │   └─── FUNDING.yml
    ├─── bin/
    ├─── dist/
    ├─── LICENSES/
    │   ├─── NEU-LICENSE
    │   ├─── MAR.V2.EXE-LICENSE.md
    │   └─── YOUR-LICENSE.text
    ├─── msi-dev/
    │   ├─── MSILid4Exe.cmd
    │   ├─── MSILid4Exe.exe
    │   ├─── MSILid4Exe.log
    │   └─── MSILid4Exe.xml
    ├─── public/
    ├─── .gitignore
    ├─── neutralino.config.json
    ├─── README.md
    └─── LICENSE.md
    ```
    - **Note:** An installer script that is an executable needs to be created for the Windows build first for the best experience. It's also possible to generate an MSI directly from a Windows x64 build, although my MSI builds are untested and might have major issues.
9. Create a `Mar.V2.exe/` directory within `dist/`.
    ```cmd
    Mar.V2.exe.pack/
    ├─── .github/
    │   ├─── FUNDING.yml
    ├─── bin/
    ├─── dist/
    │   ├─── Mar.V2.exe/
    ├─── LICENSES/
    │   ├─── NEU-LICENSE
    │   ├─── MAR.V2.EXE-LICENSE.md
    │   ├─── YOUR-LICENSE.text
    ├─── msi-dev/
    │   ├─── MSILid4Exe.cmd
    │   ├─── MSILid4Exe.exe
    │   ├─── MSILid4Exe.log
    │   ├─── MSILid4Exe.xml
    ├─── public/
    ├─── .gitignore
    ├─── neutralino.config.json
    ├─── README.md
    └─── LICENSE.md
    ```

Now you are ready to build the application into a proper executable.

## STEP 6: Building with Neutralino

If you didn't edit the scripts in the `package.json`, you should see something like this:
```json
  "scripts": {
    "neu": "cd Mar.V2.exe.pack && npx neu run",
    "build": "cd Mar.V2.exe.pack && npx neu build",
    "start": "cd Mar.V2.exe.pack/dist/Mar.V2.exe/ && cmd /c Mar.V2.exe-win_x64.exe",
    "remove": "rd /s /q Mar.V2.exe.pack\\dist",
    "myedit": "node rcedit.js",
    "execute": "npm run remove && npm run build && npm run myedit && npm run start"
  }
```
Each step is very important and is syntax specific on certain devices:

1. **neu**: This creates the `Mar.V2.exe.pack/` directory (unless it already exists) and runs it with Neutralino. This step doesn't work for everyone and is a debug step. It requires code to pull from already in the `Mar.V2.exe.pack` directory, so the `cd Mar.V2.exe.pack` part is to prevent Neutralino from crashing without properly exiting.

2. **build**: This creates the `Mar.V2.exe.pack/` directory (unless it already exists) and builds it with Neutralino while installing the necessary binaries. This step also requires code to pull from already in the `Mar.V2.exe.pack` directory.

3. **start**: This creates the `Mar.V2.exe.pack/dist/Mar.V2.exe/` directory (unless it already exists) and runs the Windows x64 build inside of it. This step requires it to have already been built, and it is for Windows systems only.
    - To run a Linux build, you need to create a **shell script** to install using **bash**. You can copy and paste this script and run it wuth `bash ./install-mario.sh`:
        For users with write access:
        ```shell
        #!/bin/bash
        cd Workbench/Github/Mar.V2.exe-clone/Mar.V2.exe.pack/dist/Mar.V2.exe/
        chmod +x Mar.V2.exe-linux_<architecture>
        ./Mar.V2.exe-linux_<architecture>
        ```
        For users without write access, but have an administrator with them:
        ```shell
        #!/bin/bash
        cd Workbench/Github/Mar.V2.exe-clone/Mar.V2.exe.pack/dist/Mar.V2.exe/
        sudo chmod +x Mar.V2.exe-linux_<architecture>
        sudo ./Mar.V2.exe-linux_<architecture>
        ```
    - To run a MacOS build, follow these steps:
      1. **Open Terminal**: Open the repository in the terminal on your Mac:
         ```shell
         cd Workbench/Github/Mar.V2.exe-clone/
         ```
      2. **Build the Project**:
         ```shell
         npm run build
         ```
      3. **Navigate to the Project Directory**:
         ```shell
         cd Mar.V2.exe.pack/dist/Mar.V2.exe/
         ```
      4. **Rename the Application**: Change the MacOS build name from `Mar.V2.exe-mac_<architecture>` to simply `Mar.V2.app`
      5. **Make the Application Executable**:
         ```shell
         chmod +x Mar.V2.app
         ```
      6. **Attempt to Run the Application**: This should result in an error unless you have a homebrewed version of MacOS.
         ```shell
         open ./Mar.V2.app
         ```
      7. **Override Gatekeeper**: Open the `Security & Privacy` settings in `System Preferences`.
         - Open `General`.
         - You should see a message about Mar.V2.app, most likely saying **"The developer of Mar.V2 is not trusted."** in red letters.
         - Click **"Run Anyway"** and enter your administrator password (unless it doesn't prompt you to).
      8. **Run the Application Again**:
         ```shell
         open ./Mar.V2.app
         ```
      9. **Create a Disk Image for Distribution**: This is optional, but is recommended if you plan to distribute to others:
         ```shell
         hdiutil create -volname "Mar.V2" -srcfolder dist/Mar.V2.exe/Mar.V2.app -ov -format UDZO Mar.V2.dmg
         ```
      10. **Verify the Disk Image**: Ensure the disk image is properly created and ready for distribution:
         ```shell
         hdiutil verify Mar.V2.exe.dmg
         ```
      11. **Include a README.txt**: Make sure to tell your audience how to overriede Gatekeeper and install this app.

4. **remove**: This step deletes the distributions. This is because the **build** step will refuse to work if there are already builds inside the distribution directory.

5. **myedit**: This runs `rcedit.js` to add the ICO file to a Windows build. This script is only compatible with Windows as Linux and MacOS store icons in a different way in their binaries.

6. **execute**: This runs all the necessary build steps in order to properly build the application:
    a. First, it removes any previous builds to prevent any writing errors.
    b. Second, it builds the Neutralino application and installs the necessary binaries if it wasn't previously run alone.
    c. Third, it adds the ICO file to the Windows build.
    d. Fourth, it runs the Windows build.

Once you've gotten the hang of everything and are ready to test, run the command `npm run execute`.

## STEP 7: Testing, Troubleshooting, and Releasing

The **execute** script automatically opens the application, with its logs being in the terminal and the `neutralinojs.log`.

Time to test.

### Testing
Mar.V2.exe takes a moderate amount of time to load, especially since it saves data. You may need to wait 10 seconds to 2 minutes, depending on your device.

If it is loading for any longer than 2 minutes, the application has crashed as the **Loading Screen** is identical to the **Error Screen** in the Neutralino version of this app due to errors loading the **Error Screen** *lol*. I plan to fix this in **V7.6.0-stable.0**, but that will be a long time from now.

### Troubleshooting
If it does start up correctly, try playing the game through the levels *without debug enabled*. If an error occurs, try retrying *with debug enabled* to see if the error will reoccur, and why it does via the console.

In any case where an error occurs only *without debug mode* or vice versa, check your code as it could be a script to prevent normal players from accessing secret stuff, or a script to troll developers (although I remember taking all of those out in **V7.5.1-beta.1**).

Now in a case where an error occurs **both** *with or without debug*, try to pinpoint the error and re-read the READMEs for more information about the error in case we've encountered it before.

### Releasing
I know this sounds funny, but you know what I mean.

You can push this Git repository to Github, Gitlab, or any other Git host via Git or GitHub Desktop (for GitHub only). Here's how:

#### Using Git:
1. Open your terminal or command prompt.
2. Navigate to your project directory. Example:
    ```bash
    cd Workbench/Github/Mar.V2.exe.pack-clone/
    ```
3. Add your changes to the staging area:
    ```bash
    git add .
    ```
4. Commit your changes:
    ```bash
    git commit -m "Initial Commit I guess"
    ```
5. Push your changes to the remote repository:
    ```bash
    git push origin main
    ```
6. Go to the online version of your repository, and if it has a **"releases"** option, distribute your builds there.

#### Using GitHub Desktop (for GitHub only):
1. Open GitHub Desktop.
2. Go to the `Changes` tab of your cloned repository.
3. Write a commit message in the `Summary` field (eg: "Initial Commit I guess").
4. Click on the `Commit to main` button.
5. Click on the `Push origin` button to push your changes to GitHub.
6. Go to the Github version of your repository, and click the **"releases"** option, and distribute your builds there.

Perfect! Now we've completed this overly long tutorial on how to edit this. Good job having the attention span to read this thing.

---

Super Mario ©1986-2025 of Nintendo.
Mar.V2.exe ©2022-2025 of ELedlow Studios.