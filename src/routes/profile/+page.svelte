<script lang="ts">
    import Profile from "$lib/components/Profile.svelte";

    export let data: {
        user: {
            name: string;
            age: number;
            sex: string;
            points: number;
            createdAt: Date;
        };
        local: boolean;
    };

    export let form: {
        error: string;
    };

</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <Profile user={data.user} error={form?.error} local={data.local}/>
</div>
