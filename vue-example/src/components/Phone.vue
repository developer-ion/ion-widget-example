<script setup>
    
    const HOST = import.meta.env.VITE_HOST
    const KEY = import.meta.env.VITE_KEY
    const USER = import.meta.env.VITE_USER

    const emit = defineEmits(['phoneLog']);
    
    import softphone from "ion-widget";
    import 'ion-widget/widget.min.css';

    let phone = new softphone({
        host:HOST,
        apikey:KEY,
        userkey:USER,
        position:'right',
        width:'250'
    });

    phone.init();

    phone.on('CONNECTION_STATUS', function(e) {
        console.log("CONNECTION_STATUS:");
        console.log(e);
        
        emit('phoneLog','CONNECTION_STATUS');
    });

    phone.on('REGISTRATION_STATUS', function(e) {
        console.log("REGISTRATION_STATUS:");
        console.log(e);


        emit('phoneLog','REGISTRATION_STATUS');
    });

    phone.on('CALL_LISTEN', function(e) {
        console.log("CALL_LISTEN:");
        console.log(e);


        emit('phoneLog','CALL_LISTEN');
    });
    phone.on('CALL_STATUS', function(e) {
        console.log("CALL_STATUS:");
        console.log(e);
    });
    phone.on('DIAL_ESTABLISHED', function(e) {
        console.log("DIAL_ESTABLISHED:");
        console.log(e);
    });

    phone.on('UNREGISTERED', function(e) {
        console.log("UNREGISTERED:");
        console.log(e);
    });
</script>

<template>
    <div></div>
</template>