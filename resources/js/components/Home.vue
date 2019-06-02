<template>
    <div>
        <section class="content-header">
            <h1>
                Home Component
                <small>Version 2.0</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                <li class="active">Dashboard</li>
            </ol>
        </section>
        <section class="content">
            Data ...
        </section>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                'greetings': ''
            }
        }
    }
</script>
