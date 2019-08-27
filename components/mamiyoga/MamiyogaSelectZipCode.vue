<template>
    <div>
        <twzipcode-county text-template=":id :county-:city"></twzipcode-county>
    </div>
</template>

<script>
import Vue from 'vue';
import { Zipcode } from 'twzipcode-vue'
export default {
    TwzipcodeZipcode: Zipcode,
}
</script>

<style>

</style>