<script lang="ts">
    import Card from "$lib/components/Card.svelte";

    let name = "Product Name";
    let age = 23;
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mt-0 mt-20">
        <Card user={{ name, age }} />
        <Card user={{ name, age }} />
    </div>
</div>