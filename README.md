# [write here name].lego_flutter
This is a Lego that applies a [write here name] to lego-flutter.

## introduction
[Please introduce this Lego to me.]

## Required Legos
[If there are any Legos that need to be installed beforehand, please list them here. If not, you can delete this.]

## installation
[Please write down the detailed installation instructions. Below is a sample.]
1. If you don't have lego-flutter yet, please prepare your own project by following the [instructions here](https://github.com/melodysdreamj/lego-flutter).
2. Clone the repository and download it.
3. Copy the all folder inside this project's lego, and then paste it under the `lib` folder of your project.
4. In your project's `pubspec.yaml`, add `battery_plus 5.0.2` under `dependencies:`, and then run flutter pub get.
5. In the `lib/util/ready/ready.dart` file, paste the `await readyForBatteryPlus();` code inside the readyForAppStart() function. Also, add `import 'battery_plus/ready.dart';`  at the top as a reference.
6. In di.dart located at (lib/util/di.dart), add the following code:
```dart
export 'package:battery_plus/battery_plus.dart';
```

# usage
[Please explain in detail how to use it, including code blocks.]
