<script>
  export let planet
</script>

{#if typeof planet?.name !== 'undefined'}
  <div>
    NAME: {planet.name}
  </div>
{/if}
