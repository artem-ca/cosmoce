<script>
  export let planet
</script>

{#if typeof planet.name !== 'undefined'}
  NAME: {planet.name}
{/if}
