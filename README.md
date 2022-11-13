oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g pcss
$ pcss COMMAND
running command...
$ pcss (--version)
pcss/0.0.0 darwin-arm64 node-v18.12.1
$ pcss --help [COMMAND]
USAGE
  $ pcss COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pcss hello PERSON`](#pcss-hello-person)
* [`pcss hello world`](#pcss-hello-world)
* [`pcss help [COMMAND]`](#pcss-help-command)
* [`pcss plugins`](#pcss-plugins)
* [`pcss plugins:install PLUGIN...`](#pcss-pluginsinstall-plugin)
* [`pcss plugins:inspect PLUGIN...`](#pcss-pluginsinspect-plugin)
* [`pcss plugins:install PLUGIN...`](#pcss-pluginsinstall-plugin-1)
* [`pcss plugins:link PLUGIN`](#pcss-pluginslink-plugin)
* [`pcss plugins:uninstall PLUGIN...`](#pcss-pluginsuninstall-plugin)
* [`pcss plugins:uninstall PLUGIN...`](#pcss-pluginsuninstall-plugin-1)
* [`pcss plugins:uninstall PLUGIN...`](#pcss-pluginsuninstall-plugin-2)
* [`pcss plugins update`](#pcss-plugins-update)

## `pcss hello PERSON`

Say hello

```
USAGE
  $ pcss hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/purecss-co/purecss-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `pcss hello world`

Say hello world

```
USAGE
  $ pcss hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ pcss hello world
  hello world! (./src/commands/hello/world.ts)
```

## `pcss help [COMMAND]`

Display help for pcss.

```
USAGE
  $ pcss help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for pcss.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.18/src/commands/help.ts)_

## `pcss plugins`

List installed plugins.

```
USAGE
  $ pcss plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ pcss plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.6/src/commands/plugins/index.ts)_

## `pcss plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ pcss plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ pcss plugins add

EXAMPLES
  $ pcss plugins:install myplugin 

  $ pcss plugins:install https://github.com/someuser/someplugin

  $ pcss plugins:install someuser/someplugin
```

## `pcss plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ pcss plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ pcss plugins:inspect myplugin
```

## `pcss plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ pcss plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ pcss plugins add

EXAMPLES
  $ pcss plugins:install myplugin 

  $ pcss plugins:install https://github.com/someuser/someplugin

  $ pcss plugins:install someuser/someplugin
```

## `pcss plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ pcss plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ pcss plugins:link myplugin
```

## `pcss plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ pcss plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pcss plugins unlink
  $ pcss plugins remove
```

## `pcss plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ pcss plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pcss plugins unlink
  $ pcss plugins remove
```

## `pcss plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ pcss plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pcss plugins unlink
  $ pcss plugins remove
```

## `pcss plugins update`

Update installed plugins.

```
USAGE
  $ pcss plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
