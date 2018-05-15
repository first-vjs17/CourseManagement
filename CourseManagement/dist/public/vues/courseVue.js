let app = new Vue({
    el: '#addCor',
    data: {
        courses:[],
        name:'',
        id:''
    },
    created() {
        this.getCourses()
    },
    methods: {
        getCourses() {
            axios.get("/courses")
                .then( response => {
                    this.courses = response.data
                    console.log(this.courses)
                })
                .catch(error => {
                    console.log(error);
                })
        },

        addCourse() {
            this.error = ''
            if(this.name.trim() == ""){
                alert("Data is empty")
                return
            }
            else{
                alert("Data successfully added")
            }
            axios.post("/courses", {
                name: this.name
            }).then(response => {
                this.getCourses()
            }).catch(error => {
                console.log(error);
            })
        }

    }
}); 

