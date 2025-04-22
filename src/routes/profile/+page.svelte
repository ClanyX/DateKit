<script lang="ts">
    export let data: {
        user: {
            name: string;
            age: number;
            sex: string;
            points: number;
        };
    };
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <!-- Need better design -->
        <form action="?/updateProfile" method="POST">
            <h1 class="text-2xl font-bold mb-4">User Profile</h1>
            <p class="text-gray-700">
                <strong>Name:</strong>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder={data.user.name}
                />
            </p>
            <p class="text-gray-700">
                <strong>Age:</strong>
                <input
                    id="age"
                    type="number"
                    name="age"
                    placeholder={String(data.user.age)}
                />
            </p>
            <p class="text-gray-700">
                <strong>Gender:</strong>
                <select name="gender" id="gender" value={data.user.sex}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </p>
            <p class="text-gray-700">
                <strong>Points:</strong>
                {data.user.points}
            </p>
            <button
                class="bg-indigo-500 hover:bg-indigo-600 rounded p-0.5"
                aria-label="edit"
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
    </div>
</div>
