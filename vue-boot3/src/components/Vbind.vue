<template>
    <div>
      <p>Name: {{ person.name }}</p>
      <p>Age: {{ person.age }}</p>
      <button @click="updatePerson">Update Person</button>
    </div>
  </template>
  
  <script setup>
  import { reactive, watch } from 'vue';
  
  const person = reactive({
    name: 'John Doe',
    age: 30
  });
  
  // 监听 person 的变化
  watch(person, (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }, { deep: true });
  
  function updatePerson() {
    person.name = 'Jane Doe';
    person.age = 28;
  }
  </script>