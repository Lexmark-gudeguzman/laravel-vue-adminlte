<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            Default Header
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            Default Body
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="btn btn-success" v-on:click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
    .btn {
        padding: 15px;
        width: 100% !important;
    }
</style>
