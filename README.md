<h3 align="center"> Excalidraw-autosave </h3>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project"> About the project </a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

## About the project
autosaves excalidraw scenes at regular intervals on a local node server.

### Built With

* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)

## Installation
**1.** Clone this project on your local machine using 
```bash
git clone https://github.com/k4droid3/excalidraw-autosave
```
**2.** Open a terminal inside your local cloned repository and execute the following commands:

```bash
npm i
```
```bash
cd client
```
```bash
npm i
```
```bash
cd ..
```
___

## Usage
**1.** Open a terminal inside the local repository and execute the following commands:
```bash
npm start
``` 
**2.** Open another terminal inside the local repository and execute the following commands:
```bash
cd client
``` 
```bash
npm start
``` 
**3.** The website should now open inside a new tab in your default browser, and can be accessed from anywhere in your local machine at the address `http://localhost:3000/` as long as the above command is still running. <br/>

***
**NOTE:**<br/><br/>
Changes made in the `http://localhost:3000` will be saved as `default.png`, to save changes based on room name use `http://localhost:3000/#room=<ROOM_NAME>`.<br/>
(eg. `http://localhost:3000/#room=work` will autosave scenes as `work.png`)
***
