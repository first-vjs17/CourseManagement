let app = new Vue({
    el: '#addTea',
    data: {
        teachers:[],
        name:'',
        id:''
    },
    created() {
        this.getTeachers()
    },
    methods: {
        getTeachers() {
            axios.get("/teachers")
                .then( response => {
                    this.teachers = response.data
                    console.log(this.teachers)
                })
                .catch(error => {
                    console.log(error);
                })
        },

        addTeacher() {
            this.error = ''
            if(this.name.trim() == ""){
                alert("Data is empty")
                return
            }
            else{
                alert("Data successfully added")
            }
            axios.post("/teachers", {
                name: this.name
            }).then(response => {
                this.getTeachers()
            }).catch(error => {
                console.log(error);
            })
        }

    }
}); 

