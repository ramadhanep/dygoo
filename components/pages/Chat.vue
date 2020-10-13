<template>
    <div class="d-lg-flex mb-4">
        <div class="chat-leftsidebar card">
            <div class="p-3 px-4">
                <div class="media">
                    <div class="media-body">
                        <img src="~/assets/images/logo.png" alt="Dygoo" width="100">
                    </div>
                    <div class="dropdown chat-noti-dropdown">
                        <button class="btn dropdown-toggle py-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="uil uil-ellipsis-h"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" @click="logout">Leave Room</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-3">
                <div style="max-height: 470px;">
                    <div class="p-4 border-top">
                        <div>
                            <h5 class="font-size-16 mb-3"><i class="uil uil-users-alt mr-1"></i> Room</h5>

                            <ul class="list-unstyled chat-list group-list">
                                <li class="active">
                                    <a href="javascript:void(0)">
                                        <div class="media align-items-center">
                                            <div class="avatar-xs mr-3">
                                                <span class="avatar-title rounded-circle bg-soft-primary text-primary">
                                                    {{ authData.room.slice(0, 2).toUpperCase() }}
                                                </span>
                                            </div>
                                            
                                            <div class="media-body">
                                                <h5 class="font-size-14 mb-0">{{ authData.room }}</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-4 border-top">
                        <div>
                            <h5 class="font-size-16 mb-3"><i class="uil uil-user mr-1"></i> Online</h5>

                            <ul class="list-unstyled chat-list">
                                <li v-for="item in onlineUsers">
                                    <a href="javascript:void(0)">
                                        <div class="media align-items-center">
                                            
                                            <div class="avatar-xs mr-3">
                                                <span class="avatar-title rounded-circle bg-soft-primary text-primary">
                                                    {{ item.slice(0, 1).toUpperCase() }}
                                                </span>
                                            </div>
                                            
                                            <div class="media-body overflow-hidden">
                                                <h5 class="text-truncate font-size-14 mb-1">{{ item }}</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- end chat-leftsidebar -->

        <div class="w-100 user-chat mt-4 mt-sm-0 ml-lg-1">
            <div class="card">
                <div class="p-3 px-lg-4 border-bottom">
                    <div class="row">
                        <div class="col-md-4 col-6">
                            <h5 class="font-size-16 mb-1 text-truncate"><a href="javascript:void(0)" class="text-dark">{{ authData.room }}</a></h5>
                            <p class="text-muted text-truncate mb-0"><i class="uil uil-users-alt mr-1"></i> 1 Members Online</p>
                        </div>
                    </div>
                </div>

                <div class="px-lg-2">
                    <div class="chat-conversation p-3 custom-m-h">
                        <ul v-chat-scroll class="list-unstyled mb-0 chat-overflow">
                            <li class="chat-day-title"> 
                                <div class="title">Start chat with Dygoo</div>
                            </li>
                            <li v-for="item in messages" :class="{ 'right': item.sender }">
                                <div class="conversation-list">
                                    <div class="ctext-wrap">
                                        <div class="ctext-wrap-content">
                                            <h5 class="font-size-14 conversation-name"><a href="javascript:void(0)" class="text-dark">{{ item.username }}</a> <span class="d-inline-block font-size-12 text-muted ml-2">{{ item.time }}</span></h5>
                                            <p class="mb-0">
                                                {{ item.text }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="p-3 chat-input-section">
                    <form @submit.prevent="sendNewMessage">
                    <div class="row">
                        <div class="col">
                            <div class="position-relative">
                                <input type="text" class="form-control chat-input rounded" placeholder="Enter Message..." v-model="newMessage.text">
                            </div>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary chat-send w-md waves-effect waves-light"><span class="d-none d-sm-inline-block mr-2">Send</span> <i class="mdi mdi-send float-right"></i></button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '~/plugins/VueChatScroll'

    export default {
        mounted() {
            this.nuxtSocketRegister()
        },
        data() {
            return {
                authData: {
                    username: "",
                    room: ""
                },
                messages: [],
                newMessage: {
                    text: ""
                },
                onlineUsers: [],
                socket: this.$nuxtSocket({})
            }
        },
        methods: {
            async logout() {
                this.redirectToLogin()
                await this.$store.dispatch('logout')
            },
            nuxtSocketRegister() {
                const authUser = this.$store.state.authUser
                const username = authUser.username,
                room = authUser.room

                this.authData.username = username
                this.authData.room = room

                this.socket.emit('joinRoom', { username, room })

                this.socket.on('roomUsers', ({ room, users }) => {
                    // if (this.onlineUsers.includes(users[users.length - 1].username)) {
                    //     this.logout()
                    // }
                    // else {
                        this.outputUsers(users)
                    // }
                })

                this.socket.on('message', message => {
                    this.outputMessage(message)
                })
            },
            outputUsers(users) {
                this.onlineUsers = []
                for (let index = 0; index < users.length; index++) {
                    this.onlineUsers.push(users[index].username)
                }
            },
            outputMessage(message) {
                if (message.username === this.authData.username) {
                    message.sender = true
                }
                else {
                    message.sender = false
                }
                this.messages.push(message)
            },
            sendNewMessage() {
                const message = this.newMessage.text

                this.newMessage.text = ""

                this.socket.emit('chatMessage', message)
            },
            redirectToLogin() {
                this.$router.push("login")
            }
        },
    }
</script>

<style scoped>
    body[data-layout=horizontal] .page-content{
        margin-top: 0 !important;
    }
    .simplebar-content-wrapper {
      overflow: auto;
    }
    .chat-overflow {
        height: 300px;
        overflow: auto;
    }
    .chat-overflow::-webkit-scrollbar {
        width: 5px;
        min-height: 20px;
    }
    
    .chat-overflow::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    
    .chat-overflow::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #5b73e8;
    }
</style>