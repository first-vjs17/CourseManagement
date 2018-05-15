let app = new Vue({
    el: '#addStu',
    data: {
        students:[],
        name:'',
        id:'',
        enrolledBatches:[],
        batches:[],
        bid:''
    },
    created() {
        this.getStudents(),
        this.getBatches()
    },
    methods: {
        getStudents() {
            axios.get("/students")
                .then( response => {
                    this.students = response.data
                    console.log(this.students)
                })
                .catch(error => {
                    console.log(error);
                })
        },

        getBatches() {
            axios.get("/batches")
                .then( response => {
                    this.batches = response.data
                    console.log(this.batches)
                })
                .catch(error => {
                    console.log(error);
                })
        },

        addStudent() {
            this.error = ''
            if(this.name.trim() == ""){
                alert("Data is empty")
                return
            }
            else{
                alert("Data successfully added")
            }
            axios.post("/students", {
                name: this.name
            }).then(response => {
                this.getStudents()
            }).catch(error => {
                console.log(error);
            })
        },

        stuDetail() {
            this.id = event.target.id
            this.name = event.target.name
            let studentId = this.id
            this.getStudentBatches()
        },

        getStudentBatches() {
            let studentId = this.id
            axios.get("/students/"+studentId+"/batches")
                .then( response => {
                    this.enrolledBatches = response.data
                    console.log(this.enrolledBatches)
                })
                .catch(error => {
                    console.log(error);
                })
        },

        addBatch() {
            
            console.log(this.bid)
            axios.post("/students/"+this.id+"/batches/"+this.bid ,{
                studentId: this.id,
                batchId: this.bid
            } ).then( (response) => {
                this.getStudentBatches()
            })
        }
    }
}); 

