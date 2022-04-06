<div align="center">

  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
</div>

<br />
<p align="center">
  <h3 align="center">loctry</h3>

  <p align="center">
    This is a CLI for improve the local library testing experience
    <br />
    <br />
    <a href="https://github.com/edumudu/loctry/issues">
      Report Bug
    </a>
    ·
    <a href="https://github.com/edumudu/loctry/issues">
      Request Feature
    </a>
  </p>
</p>

## About The Project

This is a CLI for improve the local library testing experience. Under the hood this CLI uses `npm pack` for generate a tarball equals the sended to the npm registry to allow you test if the proejct is correcty configurated.

> NOTE: this requires at least NPM 7+

### Usage

Install the loctry globaly
```bash
npm install -g loctry
```

Enter in your pacakge directory and run
```bash
loctry publish
```
> NOTE: This  command needs to be run in the same dir as the `package.json`

This command will pack and send your package tarball to the `.loctry` folder to be avaiable to be installed in others projects. 

> NOTE: Do not modify `.loctry` dir manually. This is an internal API

To install the package enter in the project directory and run
```bash
loctry install <package-name>
```

This command will install your local package in the current project

### Commands

#### Publish
Pack and send your package tarball to the `.loctry` folder to be avaiable to be installed in others projects.

#### Unpublish
Remove your package tarball from the `.loctry` folder. The package cannot be installed in others projects after this.

Ex:
```bash
loctry unpublish <package-name>
```

#### Install
Install your local package in the current project

Ex:
```bash
loctry install <package-name>
```

#### List
List available packages in the local registry

## LICENSE

This project is under MIT licence. See the archive [LICENSE](../../LICENSE) to more details.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/edumudu/loctry?style=flat-square
[contributors-url]: https://github.com/edumudu/loctry/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/edumudu/loctry?style=flat-square
[forks-url]: https://github.com/edumudu/loctry/network/members

[stars-shield]: https://img.shields.io/github/stars/edumudu/loctry?style=flat-square
[stars-url]: https://github.com/edumudu/loctry/stargazers

[issues-shield]: https://img.shields.io/github/issues-raw/edumudu/loctry?style=flat-square
[issues-url]: https://github.com/edumudu/loctry/issues

[license-shield]: https://img.shields.io/github/license/edumudu/loctry?style=flat-square
[license-url]: https://github.com/edumudu/loctry/blob/master/LICENSE
