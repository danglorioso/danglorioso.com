---
title: "Building Neural Networks in JavaScript: A Complete Guide"
description: "Learn how to build neural networks from scratch using vanilla JavaScript. We'll cover perceptrons, backpropagation, and practical implementation."
pubDate: 2024-12-15
category: "Machine Learning"
tags: ["JavaScript", "AI", "Neural Networks", "Machine Learning"]
readTime: "8 min read"
featured: false
draft: true
heroImage: "/images/blog/neural-networks-js.jpg"
---

Neural networks might seem like magic, but they're actually just sophisticated pattern recognition systems. In this guide, we'll build one from scratch using vanilla JavaScript.

## What You'll Learn

- The fundamentals of neural network architecture
- How to implement forward propagation
- Backpropagation and gradient descent
- Training a network to solve real problems

## The Perceptron: Our Building Block

Let's start with the simplest neural network component - the perceptron:

```javascript
class Perceptron {
  constructor(inputCount) {
    this.weights = Array(inputCount).fill(0).map(() => Math.random() * 2 - 1);
    this.bias = Math.random() * 2 - 1;
  }
  
  predict(inputs) {
    let sum = this.bias;
    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activation(sum);
  }
  
  activation(x) {
    return x > 0 ? 1 : 0; // Step function
  }
}
```

## Building a Multi-Layer Network

Now let's create a proper neural network with multiple layers:

```javascript
class NeuralNetwork {
  constructor(inputNodes, hiddenNodes, outputNodes) {
    this.inputNodes = inputNodes;
    this.hiddenNodes = hiddenNodes;
    this.outputNodes = outputNodes;
    
    // Initialize weights randomly
    this.weightsInputHidden = this.createMatrix(this.hiddenNodes, this.inputNodes);
    this.weightsHiddenOutput = this.createMatrix(this.outputNodes, this.hiddenNodes);
    
    // Initialize biases
    this.biasHidden = this.createMatrix(this.hiddenNodes, 1);
    this.biasOutput = this.createMatrix(this.outputNodes, 1);
    
    // Set learning rate
    this.learningRate = 0.1;
  }
  
  createMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = Math.random() * 2 - 1;
      }
    }
    return matrix;
  }
  
  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }
  
  sigmoidDerivative(x) {
    return x * (1 - x);
  }
}
```

## Training the Network

The magic happens during training. Here's how we implement backpropagation:

```javascript
train(inputArray, targetArray) {
  // Forward propagation
  let inputs = this.arrayToMatrix(inputArray);
  let hidden = this.matrixMultiply(this.weightsInputHidden, inputs);
  hidden = this.matrixAdd(hidden, this.biasHidden);
  hidden = this.matrixMap(hidden, this.sigmoid);
  
  let outputs = this.matrixMultiply(this.weightsHiddenOutput, hidden);
  outputs = this.matrixAdd(outputs, this.biasOutput);
  outputs = this.matrixMap(outputs, this.sigmoid);
  
  // Backpropagation
  let targets = this.arrayToMatrix(targetArray);
  let outputErrors = this.matrixSubtract(targets, outputs);
  
  // Calculate gradients
  let gradients = this.matrixMap(outputs, this.sigmoidDerivative);
  gradients = this.matrixHadamard(gradients, outputErrors);
  gradients = this.matrixScale(gradients, this.learningRate);
  
  // Update weights and biases
  let hiddenT = this.matrixTranspose(hidden);
  let weightHODeltas = this.matrixMultiply(gradients, hiddenT);
  
  this.weightsHiddenOutput = this.matrixAdd(this.weightsHiddenOutput, weightHODeltas);
  this.biasOutput = this.matrixAdd(this.biasOutput, gradients);
  
  // Hidden layer errors
  let whoT = this.matrixTranspose(this.weightsHiddenOutput);
  let hiddenErrors = this.matrixMultiply(whoT, outputErrors);
  
  // Hidden gradients
  let hiddenGradient = this.matrixMap(hidden, this.sigmoidDerivative);
  hiddenGradient = this.matrixHadamard(hiddenGradient, hiddenErrors);
  hiddenGradient = this.matrixScale(hiddenGradient, this.learningRate);
  
  // Update input-hidden weights
  let inputsT = this.matrixTranspose(inputs);
  let weightIHDeltas = this.matrixMultiply(hiddenGradient, inputsT);
  
  this.weightsInputHidden = this.matrixAdd(this.weightsInputHidden, weightIHDeltas);
  this.biasHidden = this.matrixAdd(this.biasHidden, hiddenGradient);
}
```

## Practical Example: XOR Problem

Let's solve the classic XOR problem:

```javascript
const network = new NeuralNetwork(2, 4, 1);

// Training data for XOR
const trainingData = [
  { inputs: [0, 0], targets: [0] },
  { inputs: [0, 1], targets: [1] },
  { inputs: [1, 0], targets: [1] },
  { inputs: [1, 1], targets: [0] }
];

// Train the network
for (let i = 0; i < 10000; i++) {
  let data = trainingData[Math.floor(Math.random() * trainingData.length)];
  network.train(data.inputs, data.targets);
}

// Test the network
console.log(network.predict([0, 0])); // Should be close to 0
console.log(network.predict([0, 1])); // Should be close to 1
console.log(network.predict([1, 0])); // Should be close to 1
console.log(network.predict([1, 1])); // Should be close to 0
```

## Key Takeaways

1. **Neural networks are pattern matchers** - They learn to map inputs to outputs
2. **Backpropagation is key** - It's how the network learns from mistakes
3. **Start simple** - Perceptrons and small networks are easier to understand
4. **Practice matters** - Build different networks to gain intuition

## Next Steps

- Experiment with different activation functions
- Try convolutional neural networks for image processing
- Explore recurrent networks for sequence data
- Learn about modern frameworks like TensorFlow.js

Building neural networks from scratch gives you deep understanding of how they work. While you'll probably use libraries in production, this foundation is invaluable for debugging and optimization.

