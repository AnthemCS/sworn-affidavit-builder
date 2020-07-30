<template>
  <div
    class="position-sticky body"
    ref="print"

  >
<div id="page_1">
<div id="p1dimg1">
<img src="data:image/jpg;base64,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yPR/wjepf9Dlrn/fmy/+R6ANyisP/hG9S/6HLXP+/Nl/8j0f8I3qX/Q5a5/35sv/AJHoA3KKw/8AhG9S/wChy1z/AL82X/yPR/wjepf9Dlrn/fmy/wDkegDcorD/AOEb1L/octc/782X/wAj0f8ACN6l/wBDlrn/AH5sv/kegDcorD/4RvUv+hy1z/vzZf8AyPR/wjepf9Dlrn/fmy/+R6ANyisP/hG9S/6HLXP+/Nl/8j0f8I3qX/Q5a5/35sv/AJHoA3KKw/8AhG9S/wChy1z/AL82X/yPR/wjepf9Dlrn/fmy/wDkegDcorD/AOEb1L/octc/782X/wAj0f8ACN6l/wBDlrn/AH5sv/kegDcorD/4RvUv+hy1z/vzZf8AyPR/wjepf9Dlrn/fmy/+R6ANyisP/hG9S/6HLXP+/Nl/8j0f8I3qX/Q5a5/35sv/AJHoA3KKw/8AhG9S/wChy1z/AL82X/yPR/wjepf9Dlrn/fmy/wDkegDcorD/AOEb1L/octc/782X/wAj0f8ACN6l/wBDlrn/AH5sv/kegDcorD/4RvUv+hy1z/vzZf8AyPR/wjepf9Dlrn/fmy/+R6ANyisP/hG9S/6HLXP+/Nl/8j0f8I3qX/Q5a5/35sv/AJHoA3KKw/8AhG9S/wChy1z/AL82X/yPR/wjepf9Dlrn/fmy/wDkegDcrE8Gf8gK4/7Cuo/+ls1J/wAI3qX/AEOWuf8Afmy/+R60dF0mPRNMWyjuJ7n97LM80+3e7ySNIxO1VX7znoBTA0KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKw5vCenTuHe51kEIqfJrV4gwqhRwsoGcDk9Sck5JJoA3KK5//hDdL/5+tc/8Ht7/APHq0NM0a10jzfs0t9J5uN32u/nucYzjHmu23r2xnjPQUAaFFY994asNQvJLqa41VJHxkQatdQoMADhEkCjp2HPXrVf/AIQ3S/8An61z/wAHt7/8eoA6Cis/TNGtdI837NLfSebjd9rv57nGM4x5rtt69sZ4z0FV77w1YaheSXU1xqqSPjIg1a6hQYAHCJIFHTsOevWgDYorn/8AhDdL/wCfrXP/AAe3v/x6tDTNGtdI837NLfSebjd9rv57nGM4x5rtt69sZ4z0FAGhRWPfeGrDULyS6muNVSR8ZEGrXUKDAA4RJAo6dhz161X/AOEN0v8A5+tc/wDB7e//AB6gDoKKz9M0a10jzfs0t9J5uN32u/nucYzjHmu23r2xnjPQVXvvDVhqF5JdTXGqpI+MiDVrqFBgAcIkgUdOw569aANiiuf/AOEN0v8A5+tc/wDB7e//AB6tDTNGtdI837NLfSebjd9rv57nGM4x5rtt69sZ4z0FAGhRWPfeGrDULyS6muNVSR8ZEGrXUKDAA4RJAo6dhz161X/4Q3S/+frXP/B7e/8Ax6gDoKKz9M0a10jzfs0t9J5uN32u/nucYzjHmu23r2xnjPQVXvvDVhqF5JdTXGqpI+MiDVrqFBgAcIkgUdOw569aANiiuf8A+EN0v/n61z/we3v/AMerQ0zRrXSPN+zS30nm43fa7+e5xjOMea7bevbGeM9BQBoUVnto1q2oyXxlvvOk2blF/OIxtKkYjD7F5QZwBkFgchmB0KACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArP1DXdH0jP9parY2WNuftNwkeN27b94jrsfHrtb0NFFAGf/AMJ34P8A+hr0P/wYw/8AxVSQeNPCt1cRW9v4l0aaeVwkccd/EzOxOAAA2SSeMUUUAaGpatpujW63GqahaWMDOEWS6mWJS2CcAsQM4BOPY1l/8J34P/6GvQ//AAYw/wDxVFFAEkHjTwrdXEVvb+JdGmnlcJHHHfxMzsTgAANkknjFaGpatpujW63GqahaWMDOEWS6mWJS2CcAsQM4BOPY0UUAZf8Awnfg/wD6GvQ//BjD/wDFVJB408K3VxFb2/iXRpp5XCRxx38TM7E4AADZJJ4xRRQBoalq2m6NbrcapqFpYwM4RZLqZYlLYJwCxAzgE49jWX/wnfg//oa9D/8ABjD/APFUUUASQeNPCt1cRW9v4l0aaeVwkccd/EzOxOAAA2SSeMVoalq2m6NbrcapqFpYwM4RZLqZYlLYJwCxAzgE49jRRQBl/wDCd+D/APoa9D/8GMP/AMVUkHjTwrdXEVvb+JdGmnlcJHHHfxMzsTgAANkknjFFFAGhqWrabo1utxqmoWljAzhFkupliUtgnALEDOATj2NZf/Cd+D/+hr0P/wAGMP8A8VRRQBJB408K3VxFb2/iXRpp5XCRxx38TM7E4AADZJJ4xWhqWrabo1utxqmoWljAzhFkupliUtgnALEDOATj2NFFAGX/AMJ34P8A+hr0P/wYw/8AxVSQeNPCt1cRW9v4l0aaeVwkccd/EzOxOAAA2SSeMUUUAaGpatpujW63GqahaWMDOEWS6mWJS2CcAsQM4BOPY1l/8J34P/6GvQ//AAYw/wDxVFFAEkHjTwrdXEVvb+JdGmnlcJHHHfxMzsTgAANkknjFaGpatpujW63GqahaWMDOEWS6mWJS2CcAsQM4BOPY0UUAZf8Awnfg/wD6GvQ//BjD/wDFVJB408K3VxFb2/iXRpp5XCRxx38TM7E4AADZJJ4xRRQBoalq2m6NbrcapqFpYwM4RZLqZYlLYJwCxAzgE49jWX/wnfg//oa9D/8ABjD/APFUUUASQeNPCt1cRW9v4l0aaeVwkccd/EzOxOAAA2SSeMVoalq2m6NbrcapqFpYwM4RZLqZYlLYJwCxAzgE49jRRQBTs/FnhvUJTFZeINKuZBtykN7G5G5gi8A92ZVHqWA6mtiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z" id="p1img1"></div>


<div id="id1_1">
<p class="p0 ft0">SWORN AFFIDAVIT</p>
<p class="p1 ft1"><nobr>B-BBEE</nobr> Exempted Micro Enterprise</p>
<p class="p2 ft2">GENERAL</p>
<p class="p3 ft3">DATE OF ISSUE</p>
<p class="p4 ft4">MEASURED ENTERPRISE/BUSINESS ENTITY</p>
<p class="p5 ft6">Enterprise Name (<span class="ft5">Full Name</span>):</p>
<p class="p6 ft6">Trade Name (<span class="ft5">If Applicable</span>):</p>
<p class="p7 ft6">Registration Number:</p>
<p class="p7 ft6">Type of Entity (<span class="ft5">CC, PTY Ltd, etc</span>):</p>
<p class="p6 ft6">Physical Address:</p>
</div>
<div id="id1_2">
<div id="id1_2_1">
<p class="p8 ft6">I hereby declare under Oath that:</p>
<p class="p9 ft6">The Enterprise is <span class="ft4">100 % </span>Black Owned as per Amended Code Series 100 of the Amended Codes of Good Practice issued under section 9 (1) of <nobr>B-BBEE</nobr> Act No 53 of 2003 as Amended by Act No 46 of 2013;</p>
<p class="p10 ft8">The Enterprise is <span class="ft7">100 % </span>Black Female Owned as per Amended Code Series 100 of the Amended Codes of Good Practice issued under section 9</p>
<p class="p11 ft6">(1) of <nobr>B-BBEE</nobr> Act No 53 of 2003 as Amended by Act No 46 of 2013;</p>
<p class="p12 ft6">The Enterprise is <span class="ft4">100 % </span>Black Designated Group Owned as per Amended Code Series 100 of the Amended Codes of Good Practice issued under section 9 (1) of <nobr>B-BBEE</nobr> Act No 53 of 2003 as Amended by Act No 46 of 2013;</p>
</div>
<div id="id1_2_2">
<p class="p13 ft10">Black Designated Group Owned % Breakdown as per the de<span class="ft9">￿</span>nition stated</p>
<table cellpadding="0" cellspacing="0" class="t0">
<tbody><tr>
	<td class="tr0 td0"><p class="p14 ft6">Black Youth %</p></td>
	<td class="tr0 td1"><p class="p15 ft11">-</p></td>
</tr>
<tr>
	<td class="tr1 td2"><p class="p14 ft6">Black Disabled %</p></td>
	<td class="tr1 td3"><p class="p15 ft11">-</p></td>
</tr>
<tr>
	<td class="tr1 td2"><p class="p14 ft6">Black Unemployed %</p></td>
	<td class="tr1 td3"><p class="p15 ft11">-</p></td>
</tr>
<tr>
	<td class="tr2 td2"><p class="p14 ft6">Black People living in</p></td>
	<td class="tr2 td3"><p class="p15 ft11">-</p></td>
</tr>
<tr>
	<td class="tr3 td2"><p class="p14 ft6">Rural areas %</p></td>
	<td class="tr3 td3"><p class="p16 ft12">&nbsp;</p></td>
</tr>
<tr>
	<td class="tr1 td2"><p class="p14 ft6">Black Military Veterans %</p></td>
	<td class="tr1 td3"><p class="p15 ft11">-</p></td>
</tr>
<tr>
	<td class="tr4 td4"><p class="p16 ft13">&nbsp;</p></td>
	<td class="tr4 td5"><p class="p16 ft13">&nbsp;</p></td>
</tr>
</tbody></table>
</div>
</div>
<div id="id1_3">
<p class="p17 ft6">Based on the Financial Statements/Management Accounts and other information available on the latest <span class="ft14">￿</span>nancial <nobr>year-end</nobr> of <span class="ft4">R 3 578 650.50 </span>, the annual Total Revenue was R 10 000 000.00 <span class="ft5">(Ten Million Rand) </span>or less;</p>
<table cellpadding="0" cellspacing="0" class="t1">
<tbody><tr>
	<td class="tr5 td6"><p class="p18 ft6">100% Black Owned</p></td>
	<td class="tr5 td7"><p class="p19 ft5"><span class="ft11">Level One </span>(135% <nobr>B-BBEE</nobr> procurement recognition level)</p></td>
	<td class="tr5 td8"><p class="p16 ft12">&nbsp;</p></td>
</tr>
<tr>
	<td class="tr6 td9"><p class="p16 ft15">&nbsp;</p></td>
	<td class="tr6 td10"><p class="p16 ft15">&nbsp;</p></td>
	<td class="tr6 td11"><p class="p16 ft15">&nbsp;</p></td>
</tr>
<tr>
	<td class="tr7 td12"><p class="p20 ft6">At least 51% Black Owned</p></td>
	<td class="tr7 td13"><p class="p19 ft5"><span class="ft11">Level Two </span>(125% <nobr>B-BBEE</nobr> procurement recognition level)</p></td>
	<td class="tr7 td14"><p class="p16 ft12">&nbsp;</p></td>
</tr>
<tr>
	<td class="tr6 td9"><p class="p16 ft15">&nbsp;</p></td>
	<td class="tr6 td10"><p class="p16 ft15">&nbsp;</p></td>
	<td class="tr6 td11"><p class="p16 ft15">&nbsp;</p></td>
</tr>
<tr>
	<td class="tr5 td12"><p class="p20 ft6">Less than 51% Black Owned</p></td>
	<td class="tr5 td13"><p class="p19 ft5"><span class="ft11">Level Four </span>(100% <nobr>B-BBEE</nobr> procurement recognition level)</p></td>
	<td class="tr5 td14"><p class="p16 ft12">&nbsp;</p></td>
</tr>
<tr>
	<td class="tr8 td9"><p class="p16 ft16">&nbsp;</p></td>
	<td class="tr8 td10"><p class="p16 ft16">&nbsp;</p></td>
	<td class="tr8 td11"><p class="p16 ft16">&nbsp;</p></td>
</tr>
</tbody></table>
<p class="p21 ft6">I know and understand the contents of this a<span class="ft14">￿</span>davit and I have no objection to take the prescribed oath and consider the oath binding on my conscience and on the Owners of the Enterprise which I represent in this matter.</p>
<p class="p22 ft6">I, the undersigned,</p>
<p class="p11 ft6"><span class="ft11">Name and Surname </span>with identity number <span class="ft11">800000 0000 000, </span>hereby declare under oath as follows:</p>
<p class="p23 ft6"><span class="ft3">1.</span><span class="ft17">The contents of this statement are to the best of my knowledge a true re</span><span class="ft18">￿</span>ection of the facts.</p>
<p class="p11 ft6"><span class="ft3">2.</span><span class="ft19">I am a Member / Director / Owner of the following enterprise and am duly authorised to act on its behalf:</span></p>
<p class="p24 ft6">Deponent Signature:</p>
<p class="p25 ft6">Date:</p>
<p class="p26 ft20">DEFINITION OF “BLACK PEOPLE”</p>
<p class="p27 ft21">As per the <nobr>Broad-Based</nobr> Black Economic Empowerment Act 53 of 2003 as Amended by Act No 46 of 2013 “Black People” is a generic term which means Africans, Coloureds and Indians – (a) Who are citizens of the Republic of South Africa by birth or descent; or (b) Who became citizens of the Republic of South Africa by naturalization (i). Before 27 April 1994; or (ii). On or after 27 April 1994 and who would have been entitled to acquire citizenship by naturalization prior to that date</p>
<p class="p28 ft20">DEFINITION OF “BLACK DESIGNATED GROUPS”</p>
<p class="p29 ft24"><span class="ft22">(a)</span><span class="ft23">unemployed black people not attending and not required by law to attend an educational institution and not awaiting admission to an educational institution;</span></p>
<p class="p30 ft24"><span class="ft24">(b)</span><span class="ft23">Black people who are youth as de</span><span class="ft25">￿</span>ned in the National Youth Commission Act of 1996;</p>
<p class="p30 ft24"><span class="ft22">(c)</span><span class="ft23">Black people who are persons with disabilities as de</span><span class="ft25">￿</span>ned in the Code of Good Practice on employment of people with disabilities issued under the Employment Equity Act;</p>
<p class="p29 ft24"><span class="ft24">(d)</span><span class="ft23">Black people living in rural and under developed areas;</span></p>
<p class="p29 ft24"><span class="ft22">(e)</span><span class="ft26">Black military veterans who quali</span><span class="ft27">￿</span>es to be called a military veteran in terms of the Military Veterans Act 18 of 2011;”</p>
<p class="p31 ft28">Valid for 12 Months from the date signed by the commissioner</p>
</div>
<div id="id1_4">
</div>
</div>
  </div>
</template>
<script>
import { Printd } from "printd";

export default {
  name: "DocumentPdf",
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      printableCSS: `

      @import "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
       body, html {
        -webkit-print-color-adjust: exact;
      }
      span.cls_002 {
  font-family: Arial, serif;
  font-size: 15.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_002 {
  font-family: Arial, serif;
  font-size: 15.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_003 {
  font-family: Arial, serif;
  font-size: 12.6px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
div.cls_003 {
  font-family: Arial, serif;
  font-size: 12.6px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
span.cls_004 {
  font-family: Arial, serif;
  font-size: 12.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_004 {
  font-family: Arial, serif;
  font-size: 12.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_018 {
  font-family: Arial, serif;
  font-size: 12.1px;
  color: rgb(199, 199, 198);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_018 {
  font-family: Arial, serif;
  font-size: 12.1px;
  color: rgb(199, 199, 198);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_005 {
  font-family: Arial, serif;
  font-size: 9.1px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
div.cls_005 {
  font-family: Arial, serif;
  font-size: 9.1px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
span.cls_006 {
  font-family: Arial, serif;
  font-size: 12.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_006 {
  font-family: Arial, serif;
  font-size: 12.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_007 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_007 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_008 {
  font-family: Arial, serif;
  font-size: 11.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_008 {
  font-family: Arial, serif;
  font-size: 11.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_009 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
div.cls_009 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
span.cls_010 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: italic;
  text-decoration: none;
}
div.cls_010 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: italic;
  text-decoration: none;
}
span.cls_015 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_015 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_011 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(43, 42, 41);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
div.cls_011 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(43, 42, 41);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
span.cls_012 {
  font-family: Arial, serif;
  font-size: 11.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_012 {
  font-family: Arial, serif;
  font-size: 11.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_014 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_014 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_013 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_013 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_016 {
  font-family: Arial, serif;
  font-size: 5px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_016 {
  font-family: Arial, serif;
  font-size: 5px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_017 {
  font-family: Arial, serif;
  font-size: 5px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
div.cls_017 {
  font-family: Arial, serif;
  font-size: 5px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
span.cls_019 {
  font-family: Arial, serif;
  font-size: 8.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_019 {
  font-family: Arial, serif;
  font-size: 8.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
      `,
    };
  },
  mounted() {
    this.d = new Printd();
  },
  methods: {
    generatePrint() {
      axios
        .get(
          "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        )
        .then(response => {
          const bootstrapCss = response.data;
          this.d.print(this.$refs.print, bootstrapCss + this.printableCss);
        });
      this.d.print(this.$refs.print, this.printableCSS);
    },
  },
};
</script>

<style type="css">
		
		.body {margin-top: 0px;margin-left: 0px;}
		
		#page_1 {position:relative; overflow: hidden;margin: 36px 0px 12px 17px;padding: 0px;border: none;width: 776px;}
		#page_1 #id1_1 {border:none;margin: 0px 0px 0px 5px;padding: 0px;border:none;width: 771px;overflow: hidden;}
		#page_1 #id1_1 #id1_1_1 {float:left;border:none;margin: 0px 0px 0px 0px;padding: 0px;border:none;width: 728px;overflow: hidden;}
		#page_1 #id1_1 #id1_1_2 {float:left;border:none;margin: 166px 0px 0px 0px;padding: 0px;border:none;width: 43px;overflow: hidden;}
		#page_1 #id1_2 {border:none;margin: 0px 0px 0px 5px;padding: 0px;border:none;width: 764px;overflow: hidden;}
		#page_1 #id1_2 #id1_2_1 {float:left;border:none;margin: 16px 0px 0px 0px;padding: 0px;border:none;width: 728px;overflow: hidden;}
		#page_1 #id1_2 #id1_2_2 {float:left;border:none;margin: 0px 0px 0px 0px;padding: 0px;border:none;width: 36px;overflow: hidden;}
		#page_1 #id1_3 {border:none;margin: 35px 0px 0px 41px;padding: 0px;border:none;width: 735px;overflow: hidden;}
		#page_1 #id1_4 {border:none;margin: 21px 0px 0px 243px;padding: 0px;border:none;width: 533px;overflow: hidden;}
		
		#page_1 #p1dimg1 {position:absolute;top:0px;left:0px;z-index:-1;width:756px;height:906px;}
		#page_1 #p1dimg1 #p1img1 {width:756px;height:906px;}
		
		
		
		
		.dclr {clear:both;float:none;height:1px;margin:0px;padding:0px;overflow:hidden;}
		
		.ft0{font: 1px 'Arial';line-height: 1px;}
		.ft1{font: bold 20px 'Arial';color: #e9008a;line-height: 24px;}
		.ft2{font: 15px 'Arial';color: #e9008a;line-height: 17px;}
		.ft3{font: bold 16px 'Arial';color: #b3b3b3;line-height: 19px;}
		.ft4{font: bold 14px 'Arial';color: #e9008a;line-height: 16px;}
		.ft5{font: 1px 'Arial';line-height: 7px;}
		.ft6{font: 1px 'Arial';line-height: 10px;}
		.ft7{font: 1px 'Arial';line-height: 11px;}
		.ft8{font: bold 16px 'Arial';line-height: 19px;}
		.ft9{font: 12px 'Arial';color: #e9008a;line-height: 15px;}
		.ft10{font: bold 15px 'Arial';color: #e9008a;line-height: 18px;}
		.ft11{font: bold 12px 'Arial';line-height: 15px;}
		.ft12{font: italic 13px 'Arial';color: #e9008a;line-height: 16px;}
		.ft13{font: 13px 'Arial';color: #e9008a;line-height: 16px;}
		.ft14{font: bold 13px 'Arial';line-height: 16px;}
		.ft15{font: italic 12px 'Arial';color: #e9008a;line-height: 15px;}
		.ft16{font: 1px 'Arial';line-height: 13px;}
		.ft17{font: 13px 'Arial';color: #e9008a;line-height: 13px;}
		.ft18{font: bold 12px 'Arial';line-height: 13px;}
		.ft19{font: bold 13px 'Arial';color: #e9008a;line-height: 16px;}
		.ft20{font: bold 14px 'Arial';background-color: #f1f91c;line-height: 16px;}
		.ft21{font: 12px 'Arial';color: #e9008a;line-height: 14px;}
		.ft22{font: 1px 'Arial';line-height: 6px;}
		.ft23{font: 1px 'Arial';line-height: 5px;}
		.ft24{font: 1px 'Arial';line-height: 14px;}
		.ft25{font: 1px 'Arial';line-height: 9px;}
		.ft26{font: 1px 'Arial';line-height: 12px;}
		.ft27{font: 1px 'Arial';line-height: 4px;}
		.ft28{font: 13px 'Arial';color: #e9008a;line-height: 14px;}
		.ft29{font: 1px 'Arial';line-height: 8px;}
		.ft30{font: 13px 'Arial';color: #e9008a;line-height: 15px;}
		.ft31{font: 13px 'Arial';color: #e9008a;margin-left: 15px;line-height: 16px;}
		.ft32{font: bold 15px 'Arial';background-color: #f1f91c;line-height: 18px;}
		.ft33{font: 13px 'Arial';line-height: 16px;}
		.ft34{font: bold 16px 'Arial';line-height: 18px;}
		.ft35{font: bold 16px 'Arial';line-height: 17px;}
		.ft36{font: bold 12px 'Arial';background-color: #f1f91c;line-height: 15px;}
		.ft37{font: bold 13px 'Arial';background-color: #f1f91c;line-height: 16px;}
		.ft38{font: 1px 'Arial';line-height: 2px;}
		.ft39{font: 13px 'Arial';line-height: 15px;}
		.ft40{font: bold 7px 'Arial';color: #e9008a;line-height: 7px;}
		.ft41{font: 6px 'Arial';color: #e9008a;line-height: 9px;}
		.ft42{font: 6px 'Arial';color: #e9008a;line-height: 6px;}
		.ft43{font: 7px 'Arial';color: #e9008a;margin-left: 1px;line-height: 7px;}
		.ft44{font: 7px 'Arial';color: #e9008a;line-height: 7px;}
		.ft45{font: 7px 'Arial';color: #e9008a;margin-left: 2px;line-height: 7px;}
		.ft46{font: bold 11px 'Arial';color: #e9008a;line-height: 14px;}
		.ft47{font: 8px 'Calibri';line-height: 10px;}
		
		.p0{text-align: left;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p1{text-align: center;padding-right: 119px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p2{text-align: left;padding-left: 41px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p3{text-align: center;padding-right: 243px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p4{text-align: right;padding-right: 22px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p5{text-align: right;padding-right: 14px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p6{text-align: left;padding-left: 7px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p7{text-align: right;padding-right: 5px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p8{text-align: left;padding-left: 8px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p9{text-align: left;padding-left: 6px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p10{text-align: left;padding-left: 20px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p11{text-align: right;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p12{text-align: left;padding-left: 9px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p13{text-align: right;padding-right: 2px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p14{text-align: left;padding-left: 1px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p15{text-align: left;padding-left: 3px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p16{text-align: left;margin-top: 0px;margin-bottom: 0px;}
		.p17{text-align: left;margin-top: 103px;margin-bottom: 0px;}
		.p18{text-align: left;margin-top: 11px;margin-bottom: 0px;}
		.p19{text-align: left;margin-top: 8px;margin-bottom: 0px;}
		.p20{text-align: left;margin-top: 13px;margin-bottom: 0px;}
		.p21{text-align: left;margin-top: 24px;margin-bottom: 0px;}
		.p22{text-align: left;padding-left: 10px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p23{text-align: left;padding-left: 17px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p24{text-align: left;padding-left: 11px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p25{text-align: left;padding-left: 33px;padding-right: 38px;margin-top: 10px;margin-bottom: 0px;}
		.p26{text-align: right;padding-right: 37px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p27{text-align: right;padding-right: 12px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p28{text-align: left;padding-left: 33px;margin-top: 16px;margin-bottom: 0px;}
		.p29{text-align: left;padding-left: 33px;margin-top: 1px;margin-bottom: 0px;}
		.p30{text-align: left;padding-left: 35px;margin-top: 49px;margin-bottom: 0px;}
		.p31{text-align: left;padding-left: 35px;margin-top: 15px;margin-bottom: 0px;}
		.p32{text-align: right;padding-right: 3px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
		.p33{text-align: left;margin-top: 0px;margin-bottom: 0px;-webkit-transform: rotate(270deg);-moz-transform: rotate(270deg);filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);direction: rtl;block-progression: lr;width:58px;height:15px;}
		.p34{text-align: left;margin-top: 0px;margin-bottom: 0px;-webkit-transform: rotate(270deg);-moz-transform: rotate(270deg);filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);direction: rtl;block-progression: lr;width:34px;height:15px;}
		.p35{text-align: left;padding-right: 53px;margin-top: 1px;margin-bottom: 0px;}
		.p36{text-align: left;margin-top: 4px;margin-bottom: 0px;}
		.p37{text-align: left;margin-top: 1px;margin-bottom: 0px;}
		.p38{text-align: left;margin-top: 10px;margin-bottom: 0px;}
		
		.td0{border-left: #808080 1px solid;border-right: #808080 1px solid;border-top: #808080 1px solid;padding: 0px;margin: 0px;width: 120px;vertical-align: bottom;}
		.td1{padding: 0px;margin: 0px;width: 14px;vertical-align: bottom;}
		.td2{padding: 0px;margin: 0px;width: 123px;vertical-align: bottom;}
		.td3{padding: 0px;margin: 0px;width: 410px;vertical-align: bottom;}
		.td4{border-left: #808080 1px solid;border-right: #808080 1px solid;padding: 0px;margin: 0px;width: 120px;vertical-align: bottom;}
		.td5{padding: 0px;margin: 0px;width: 533px;vertical-align: bottom;}
		.td6{border-left: #808080 1px solid;border-right: #808080 1px solid;border-bottom: #808080 1px solid;padding: 0px;margin: 0px;width: 120px;vertical-align: bottom;}
		.td7{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 123px;vertical-align: bottom;}
		.td8{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 410px;vertical-align: bottom;}
		.td9{padding: 0px;margin: 0px;width: 4px;vertical-align: bottom;}
		.td10{padding: 0px;margin: 0px;width: 192px;vertical-align: bottom;}
		.td11{padding: 0px;margin: 0px;width: 230px;vertical-align: bottom;}
		.td12{padding: 0px;margin: 0px;width: 120px;vertical-align: bottom;}
		.td13{padding: 0px;margin: 0px;width: 10px;vertical-align: bottom;}
		.td14{padding: 0px;margin: 0px;width: 126px;vertical-align: bottom;}
		.td15{padding: 0px;margin: 0px;width: 422px;vertical-align: bottom;}
		.td16{padding: 0px;margin: 0px;width: 10px;vertical-align: bottom;background: #f1f91c;}
		.td17{padding: 0px;margin: 0px;width: 117px;vertical-align: bottom;background: #f1f91c;}
		.td18{padding: 0px;margin: 0px;width: 9px;vertical-align: bottom;}
		.td19{padding: 0px;margin: 0px;width: 112px;vertical-align: bottom;}
		.td20{padding: 0px;margin: 0px;width: 5px;vertical-align: bottom;}
		.td21{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 4px;vertical-align: bottom;}
		.td22{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 192px;vertical-align: bottom;}
		.td23{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 230px;vertical-align: bottom;}
		.td24{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 120px;vertical-align: bottom;}
		.td25{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 10px;vertical-align: bottom;}
		.td26{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 112px;vertical-align: bottom;}
		.td27{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 5px;vertical-align: bottom;}
		.td28{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 9px;vertical-align: bottom;}
		.td29{padding: 0px;margin: 0px;width: 4px;vertical-align: bottom;background: #e9008a;}
		.td30{border-bottom: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 192px;vertical-align: bottom;background: #fafaf9;}
		.td31{padding: 0px;margin: 0px;width: 230px;vertical-align: bottom;background: #fafaf9;}
		.td32{padding: 0px;margin: 0px;width: 120px;vertical-align: bottom;background: #fafaf9;}
		.td33{padding: 0px;margin: 0px;width: 10px;vertical-align: bottom;background: #fafaf9;}
		.td34{padding: 0px;margin: 0px;width: 112px;vertical-align: bottom;background: #fafaf9;}
		.td35{padding: 0px;margin: 0px;width: 5px;vertical-align: bottom;background: #fafaf9;}
		.td36{border-right: #e9008a 1px solid;padding: 0px;margin: 0px;width: 8px;vertical-align: bottom;background: #fafaf9;}
		.td37{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 4px;vertical-align: bottom;background: #e9008a;}
		.td38{border-bottom: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 230px;vertical-align: bottom;background: #f1f91c;}
		.td39{border-bottom: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 120px;vertical-align: bottom;background: #f1f91c;}
		.td40{border-bottom: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 10px;vertical-align: bottom;background: #f1f91c;}
		.td41{border-bottom: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 112px;vertical-align: bottom;background: #f1f91c;}
		.td42{border-bottom: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 5px;vertical-align: bottom;background: #fafaf9;}
		.td43{border-right: #e9008a 1px solid;border-bottom: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 8px;vertical-align: bottom;background: #fafaf9;}
		.td44{padding: 0px;margin: 0px;width: 192px;vertical-align: bottom;background: #fafaf9;}
		.td45{padding: 0px;margin: 0px;width: 360px;vertical-align: bottom;background: #f1f91c;}
		.td46{padding: 0px;margin: 0px;width: 112px;vertical-align: bottom;background: #f1f91c;}
		.td47{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 192px;vertical-align: bottom;background: #fafaf9;}
		.td48{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 230px;vertical-align: bottom;background: #fafaf9;}
		.td49{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 120px;vertical-align: bottom;background: #fafaf9;}
		.td50{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 10px;vertical-align: bottom;background: #fafaf9;}
		.td51{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 112px;vertical-align: bottom;background: #fafaf9;}
		.td52{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 5px;vertical-align: bottom;background: #fafaf9;}
		.td53{border-right: #e9008a 1px solid;border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 8px;vertical-align: bottom;background: #fafaf9;}
		.td54{padding: 0px;margin: 0px;width: 0px;vertical-align: bottom;}
		.td55{padding: 0px;margin: 0px;width: 455px;vertical-align: bottom;}
		.td56{padding: 0px;margin: 0px;width: 174px;vertical-align: bottom;}
		.td57{padding: 0px;margin: 0px;width: 42px;vertical-align: bottom;}
		.td58{padding: 0px;margin: 0px;width: 31px;vertical-align: bottom;}
		.td59{padding: 0px;margin: 0px;width: 114px;vertical-align: bottom;}
		.td60{padding: 0px;margin: 0px;width: 1px;vertical-align: bottom;}
		.td61{padding: 0px;margin: 0px;width: 41px;vertical-align: bottom;}
		.td62{padding: 0px;margin: 0px;width: 298px;vertical-align: bottom;}
		.td63{padding: 0px;margin: 0px;width: 247px;vertical-align: bottom;}
		.td64{padding: 0px;margin: 0px;width: 42px;vertical-align: bottom;background: #f1f91c;}
		.td65{padding: 0px;margin: 0px;width: 299px;vertical-align: bottom;}
		.td66{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 174px;vertical-align: bottom;}
		.td67{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 42px;vertical-align: bottom;}
		.td68{border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 31px;vertical-align: bottom;}
		.td69{border-left: #e9008a 1px solid;padding: 0px;margin: 0px;width: 173px;vertical-align: bottom;background: #fafaf9;}
		.td70{padding: 0px;margin: 0px;width: 42px;vertical-align: bottom;background: #fafaf9;}
		.td71{border-right: #e9008a 1px solid;padding: 0px;margin: 0px;width: 30px;vertical-align: bottom;background: #fafaf9;}
		.td72{border-left: #e9008a 1px solid;border-bottom: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 173px;vertical-align: bottom;background: #fafaf9;}
		.td73{border-bottom: #f1f91c 1px solid;padding: 0px;margin: 0px;width: 42px;vertical-align: bottom;background: #f1f91c;}
		.td74{border-right: #e9008a 1px solid;border-bottom: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 30px;vertical-align: bottom;background: #fafaf9;}
		.td75{border-left: #e9008a 1px solid;border-top: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 173px;vertical-align: bottom;background: #fafaf9;}
		.td76{border-top: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 42px;vertical-align: bottom;background: #fafaf9;}
		.td77{border-right: #e9008a 1px solid;border-top: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 30px;vertical-align: bottom;background: #fafaf9;}
		.td78{border-bottom: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 42px;vertical-align: bottom;background: #fafaf9;}
		.td79{padding: 0px;margin: 0px;width: 115px;vertical-align: bottom;}
		.td80{border-bottom: #fafaf9 1px solid;padding: 0px;margin: 0px;width: 42px;vertical-align: bottom;background: #f1f91c;}
		.td81{border-bottom: #f1f91c 1px solid;padding: 0px;margin: 0px;width: 41px;vertical-align: bottom;background: #f1f91c;}
		.td82{border-bottom: #f1f91c 1px solid;padding: 0px;margin: 0px;width: 1px;vertical-align: bottom;background: #f1f91c;}
		.td83{padding: 0px;margin: 0px;width: 157px;vertical-align: bottom;}
		.td84{border-left: #e9008a 1px solid;padding: 0px;margin: 0px;width: 215px;vertical-align: bottom;background: #e9008a;}
		.td85{border-right: #e9008a 1px solid;padding: 0px;margin: 0px;width: 30px;vertical-align: bottom;background: #e9008a;}
		.td86{padding: 0px;margin: 0px;width: 702px;vertical-align: bottom;}
		.td87{border-left: #e9008a 1px solid;border-right: #e9008a 1px solid;border-top: #e9008a 1px solid;padding: 0px;margin: 0px;width: 182px;vertical-align: bottom;}
		.td88{border-right: #e9008a 1px solid;border-top: #e9008a 1px solid;padding: 0px;margin: 0px;width: 437px;vertical-align: bottom;}
		.td89{border-right: #e9008a 1px solid;border-top: #e9008a 1px solid;padding: 0px;margin: 0px;width: 58px;vertical-align: bottom;background: #f1f91c;}
		.td90{border-left: #e9008a 1px solid;border-right: #e9008a 1px solid;border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 182px;vertical-align: bottom;}
		.td91{border-right: #e9008a 1px solid;border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 437px;vertical-align: bottom;}
		.td92{border-right: #e9008a 1px solid;border-bottom: #f1f91c 1px solid;padding: 0px;margin: 0px;width: 58px;vertical-align: bottom;background: #f1f91c;}
		.td93{border-left: #e9008a 1px solid;border-right: #e9008a 1px solid;padding: 0px;margin: 0px;width: 182px;vertical-align: bottom;}
		.td94{border-right: #e9008a 1px solid;padding: 0px;margin: 0px;width: 437px;vertical-align: bottom;}
		.td95{border-right: #e9008a 1px solid;padding: 0px;margin: 0px;width: 58px;vertical-align: bottom;background: #f1f91c;}
		.td96{border-right: #e9008a 1px solid;border-bottom: #e9008a 1px solid;padding: 0px;margin: 0px;width: 58px;vertical-align: bottom;background: #f1f91c;}
		.td97{padding: 0px;margin: 0px;width: 30px;vertical-align: bottom;}
		.td98{padding: 0px;margin: 0px;width: 122px;vertical-align: bottom;}
		.td99{padding: 0px;margin: 0px;width: 223px;vertical-align: bottom;}
		.td100{padding: 0px;margin: 0px;width: 212px;vertical-align: bottom;}
		.td101{padding: 0px;margin: 0px;width: 119px;vertical-align: bottom;}
		.td102{padding: 0px;margin: 0px;width: 104px;vertical-align: bottom;}
		.td103{padding: 0px;margin: 0px;width: 122px;vertical-align: bottom;background: #f1f91c;}
		.td104{padding: 0px;margin: 0px;width: 104px;vertical-align: bottom;background: #f1f91c;}
		.td105{padding: 0px;margin: 0px;width: 21px;vertical-align: bottom;}
		.td106{padding: 0px;margin: 0px;width: 15px;vertical-align: bottom;}
		
		.tr0{height: 37px;}
		.tr1{height: 38px;}
		.tr2{height: 21px;}
		.tr3{height: 31px;}
		.tr4{height: 24px;}
		.tr5{height: 7px;}
		.tr6{height: 10px;}
		.tr7{height: 11px;}
		.tr8{height: 18px;}
		.tr9{height: 19px;}
		.tr10{height: 30px;}
		.tr11{height: 27px;}
		.tr12{height: 16px;}
		.tr13{height: 17px;}
		.tr14{height: 13px;}
		.tr15{height: 20px;}
		.tr16{height: 26px;}
		.tr17{height: 8px;}
		.tr18{height: 14px;}
		.tr19{height: 5px;}
		.tr20{height: 6px;}
		.tr21{height: 9px;}
		.tr22{height: 22px;}
		.tr23{height: 12px;}
		.tr24{height: 34px;}
		.tr25{height: 33px;}
		.tr26{height: 4px;}
		.tr27{height: 23px;}
		.tr28{height: 15px;}
		.tr29{height: 1px;}
		.tr30{height: 2px;}
		.tr31{height: 39px;}
		.tr32{height: 58px;}
		.tr33{height: 29px;}
		
		.t0{width: 669px;margin-left: 32px;font: 15px 'Arial';color: #e9008a;}
		.t1{width: 682px;margin-left: 33px;margin-top: 4px;font: 13px 'Arial';color: #e9008a;}
		.t2{width: 711px;margin-left: 4px;margin-top: 10px;font: 13px 'Arial';color: #e9008a;}
		.t3{width: 680px;margin-left: 34px;font: 13px 'Arial';color: #e9008a;}
		.t4{width: 587px;font: bold 12px 'Arial';}
		.t5{width: 36px;font: bold 16px 'Arial';}
		
		</style>