# React Native Buy Flow

This project represents an (overly simplified) application that implements the insurance
buying flow (further referred to as “buyflow”). A buyflow is a sequence of steps arranged in
a specific order. Each step collects some data from a user that is later presented for
confirmation in the summary step.

## Demo

![buy insurance flow](demo/buyFlow.gif)

To try it yourself either follow [the project link on expo](https://expo.dev/@arkalykakash/react-native-buy-flow?serviceType=classic&distribution=expo-go) or simply scan the QR code below.

<img width="300" height="300" src="demo/expoQR.png" />

## Structure of the project

The folder structure of the project looks as follows:

```
src
└── components
└── containers
└── navigation
└── features
| └── featureFolder
|   └── components
|   └── FeatureScreen.tsx
└── App.tsx
```

### components

Contains reusable UI components.

### containers

Includes standard UI containers that can be repeatedly utilized for organizing the app's screen layouts.

### navigation

Contains navigation related files.

### features

Contains features of the app. Each feature has dedicated folders for files related to it.

---
