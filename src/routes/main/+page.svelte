<script lang="ts">
    import { page } from "$app/stores";
    import Card from "$lib/components/Card.svelte";

    const localUser = $page.data.user || null;

    let name = "Product Name";
    let age = 23;
    let sex = "male";
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mt-0 mt-20">
        <Card user={localUser} />
        <Card user={{ name, age, sex }} />
    </div>
</div>