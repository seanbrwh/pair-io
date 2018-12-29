<template>
  <div class="hello">
    <h1>Welcome to Pair.io</h1>
    <div class="text">
      <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla totam nobis animi suscipit officiis vero ea saepe possimus expedita id, nisi adipisci eveniet enim? Veritatis nam iusto harum molestiae esse!</span><span>Praesentium, qui temporibus quae, veniam unde earum iste blanditiis culpa nobis voluptatibus voluptates dolore, eligendi ad mollitia omnis a non labore. Animi officiis a quod voluptas dolores ipsa nesciunt minus.</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<style scoped lang="scss">
  .hello{
    width: 100%;
    height: 96vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background: lightgrey;
  }
  .hello h1{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 3rem;
    color: #505099;
  }
  .text{
    width: 50%;
    line-height: 19px;
    letter-spacing: .3px;
    line-break: auto;
  }
</style>
