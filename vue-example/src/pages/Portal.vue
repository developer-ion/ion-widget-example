<script setup>
import Phone from '@/components/Phone.vue';

function onPhoneLog(payload){
    console.log('payload',payload);
}
</script>
<template>
    <div>
        Portal
    </div>
    <Suspense>
        <Phone @phoneLog="onPhoneLog" />
    </Suspense>
</template>