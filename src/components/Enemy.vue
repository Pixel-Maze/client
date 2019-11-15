<template>
    <div :style="`top: ${enemy.top}px; left: ${enemy.toLeft}px; transform: rotate(${enemy.deg}deg)`" class="player">
        <img class="tank" src="../assets/tank2.png" alt="">
        <small>{{ enemy.playerName }}</small>
    </div>
</template>

<script>
export default {
    props: ['enemy']
}
</script>

<style>

</style>