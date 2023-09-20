<script setup>
import router from '@/router';
const handleLogin = ()=>{
    router.push('portal')
}
</script>

<template>
    <button @click="handleLogin">
        Login
    </button>
</template>