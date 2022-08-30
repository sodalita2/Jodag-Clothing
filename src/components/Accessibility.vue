<script>
    export default{
        data(){
            return{
                IsOpen: false,
                Brilho: 0
            }
        },
        methods:{
            ShowAccessibilityDropdown(){
                if (this.IsOpen == false){
                    this.IsOpen = true
                    this.$refs.AccessDropdown.style.display = "flex"
                    this.$refs.AccessDropdown.style.animation = "SlowFadeIn 0.3s"
                }else if (this.IsOpen == true){
                    this.IsOpen = false
                    this.$refs.AccessDropdown.style.animation = "SlowFadeOut 0.3s"
                    setTimeout(() => {
                        this.$refs.AccessDropdown.style.display = "none"
                    }, 250)
                }
            },
            ScrollTop(){
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            AumentaBrilho(){
                var AppDiv = document.getElementById("app")
                console.log(this.Brilho)
                this.Brilho += 5
                AppDiv.style.filter = `grayscale(${(this.Brilho).toString()}%)`
            },
            DiminuiBrilho(){
                var AppDiv = document.getElementById("app")
                console.log(this.Brilho)
                this.Brilho -= 5
                AppDiv.style.filter = `grayscale(${(this.Brilho).toString()}%)`
            },
        }
    }
</script>

<template>
    <div class="h-[260px] w-[240px] fixed border-4 bottom-0 right-0 flex flex-col items-end justify-end">
        <!-- Footer Dropdown Menu -->
        <div ref="AccessDropdown" class="h-full w-full bg-black bg-opacity-[89%] text-white flex flex-col items-center mb-auto hidden">
            <span>Tamanho da Fonte</span>
            <span>Controle de Brilho</span>
            <div class="h-[40px] w-[70%] flex flex-row justify-center items-center">
                <font-awesome-icon @click="DiminuiBrilho()" class="m-2 p-1 border-2 border-white cursor-pointer hover:bg-white hover:text-black" icon="fa-solid fa-minus" />
                <font-awesome-icon @click="AumentaBrilho()" class="m-2 p-1 border-2 border-white cursor-pointer hover:bg-white hover:text-black" icon="fa-solid fa-plus" />         
            </div>
        </div>
        <div>
            <font-awesome-icon @click="ScrollTop()" class="text-2xl m-1 border-2 border-black p-1 cursor-pointer font-[#2c3e50] hover:bg-black hover:text-white" icon="fa-solid fa-arrows-up-to-line" />
            <font-awesome-icon @click="ShowAccessibilityDropdown()" class="text-2xl m-1 border-2 border-black p-1 cursor-pointer font-[#2c3e50] hover:bg-black hover:text-white" icon="fa-solid fa-universal-access" />
        </div>
    </div>
</template>

