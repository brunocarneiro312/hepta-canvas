<template>
    <div id="app">
        <div class="container mt-5">
          <Calendario></Calendario>
        </div>
        <br>
    </div>
</template>

<script>



    import Calendario from "./components/Calendario";

    export default {
        name: 'app',
        components: {
            Calendario,
        }
    }
</script>

<style>
    #app {

    }
</style>
