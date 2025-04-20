<script lang="ts">
    export let data: {
        user: {
            name: string;
            age: number;
            sex: string;
            points: number;
        };
    };

    let isEditing = false;
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        {#if isEditing}
            <form method="POST">
                <h1 class="text-2xl font-bold mb-4">User Profile</h1>
                <p class="text-gray-700">
                    <strong>Name:</strong>
                    <input type="text" name="name" placeholder={data.user.name} />
                </p>
                <p class="text-gray-700">
                    <strong>Age:</strong>
                    <input type="number" name="age" placeholder={String(data.user.age)} />
                </p>
                <p class="text-gray-700">
                    <strong>Gender:</strong>
                    <input type="text" name="gender" placeholder={data.user.sex} />
                </p>
                <button
                    class="bg-indigo-500 hover:bg-indigo-600 rounded p-0.5"
                    aria-label="edit"
                    on:click={() => (isEditing = false)}
                    type="submit"
                >
                    <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 11.917 9.724 16.5 19 7.5"
                        />
                    </svg>
                </button>
            </form>
        {:else}
            <h1 class="text-2xl font-bold mb-4">User Profile</h1>
            <p class="text-gray-700"><strong>Name:</strong> {data.user.name}</p>
            <p class="text-gray-700"><strong>Age:</strong> {data.user.age}</p>
            <p class="text-gray-700"><strong>Sex:</strong> {data.user.sex}</p>
            <p class="text-gray-700">
                <strong>Points:</strong>
                {data.user.points}
            </p>
            <button
                class="bg-indigo-500 hover:bg-indigo-600 rounded p-1"
                aria-label="edit"
                on:click={() => (isEditing = true)}
            >
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
        {/if}
    </div>
</div>
