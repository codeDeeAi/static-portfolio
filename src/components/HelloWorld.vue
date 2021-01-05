<template>
  <div class="main-body">
      <div class="container-fluid">
        
        <!-- Navigation Bar -->
        <nav class="navbar navbar-light bg-indigo-400 my-2 rounded hover:shadow">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="/images/4.jpg" alt="" width="30" height="24" class="d-inline-block align-top">
              <span class="font-sanserif px-4 text-xl font-semibold">Adeola's Portfolio</span>
            </a>
            <div class="flex justify-end">
              <!-- Mobile Button -->
              <a href="#!" class="px-3"><span class="navbar-toggler-icon "></span></a>
              <!-- Mobile Button -->
            </div>
          </div>
        </nav>
        <!-- Navigation Bar Ends -->

        <!-- Content Area -->
        <div class="my-4 rounded-tr-3xl sm:rounded-bl-3xl  content border border-purple-400 overflow-auto py-2">
          <div class="container py-4">
            <!-- Header -->
            <div class="py-4">
                <h2 class="text-center">My name is Bada Adeola O.</h2>
                <h3 class="text-center">Welcome to my Portfolio</h3>
            </div>
            <!-- Header Ends -->
            <!-- Introduction -->
            <div class="row">
              <div class="col-md-6 col-sm-12">
              <div class="container">
                <figure class="figure">
                  <img src="/images/4.jpg" class="figure-img img-fluid rounded" alt="...">
                </figure>
              </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <article class="py-4">                                
                <span class="lead head"><b>A brief intro about me</b></span>
                <p>
                    I am a graduate of Civil Engineering from  Federal University, Oye-Ekiti, Nigeria.
                    My Interest in computers has led me to pursue a career in full stack web development which serves a medium of bringing my ideas to the limelight. <br>
                    I'm a self taught website developer whose interest lies in providing simple web based solutions to  people who need them.
                </p>
                <br>
                <span class="head">Skills </span>
                <br>
                <p>
                <ul>
                    <li>Business Analysis</li>
                    <li>Good knowledge of HTML, CSS, JavaScript, VueJS, Php, Laravel & SQL</li>
                    <li>Good understanding of Version Control (Git and GitHub)</li>
                    <li>Adequate understanding of Bootstrap, Materialize CSS and Tailwind</li>
                    <li>Manual testing of web-based applications</li>
                    <li>Learn Fast and open to more learning opportunities</li>
                </ul>
                </p>
                </article>                
              </div>
            </div>
            <!-- Introduction Ends -->
            <!-- Projects -->
            <!-- Project Header -->
            <div class="py-4">
                <h4 class="text-center">Projects</h4>
            </div>
            <!-- Project Header Ends -->
            <!-- Project Content -->
            <div class="justify-around grid md:grid-cols-2 sm:grid-cols-1">
              <div class="rounded-tr-3xl rounded-bl-3xl hover:shadow project-box">
                <div class="container">
                    <div class="project-description-box py-4">
                      <div class="main-box shadow rounded-bl-3xl rounded-tr-3xl bg-indigo-400">

                      </div>
                      <div class="content-box shadow rounded-bl-3xl rounded-tr-3xl bg-gray-400">

                      </div>
                    </div>
                    <div class="project-options-box grid grid-cols-2 justify-between">
                      <div class="flex justify-start">
                        <a href="#!" class="mx-2">GitHub</a>
                        <a href="#!" class="mx-2">Web</a>
                      </div>
                      <div class="flex justify-end">
                        <a href="#!">Learn More</a>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <!-- Project Content Ends -->
            <!-- Projects End -->
          </div>
        </div>
        <!-- Content Area  Ends -->

        <!-- Footer -->
        <div class="flex justify-center bg-indigo-400 rounded hover:shadow py-2">
          <p class="text-center">{{ 'Copyright'+ ' ' + '©' + cur() }}  {{ ' ' + copyright }}<a href=" https://instagram.com/mr_.dee" target="_blank">{{ name }}</a></p>
        </div>
        <!-- Footer Ends -->
      </div>
      <!-- Body Ends -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      copyright: " All rights reserved | Designed by ",
      name: "Bada Adeola O.",
    };
  },
  methods: {
    cur() {
      return new Date().getFullYear();
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
/* Main Body */
.main-body {
  height: 100vh;
}

/* Content Area */
.main-body .content {
  height: 80vh;
}

/* Project Box */
.project-box {
  height: 300px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  transform-style: preserve-3d;
}
.project-description-box {
  height: 250px;
  position: relative;
  width: 100%;
  perspective: 1000px;
  overflow: hidden;
  transform-style: preserve-3d;
}

.project-description-box .main-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: top;
  transform-style: preserve-3d;
  transition: 0.5s;
  opacity: 1;
  padding: 15% 7%;
}
.project-description-box .content-box{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20%;
    transform-origin: bottom;
    transform-style: preserve-3d;
    transition: 0.5s;
    transform: rotateY(90deg);
    opacity: 0;
    color: #fff;
    font-size: 1.1rem;
}
.project-description-box:hover >  .main-box{
    transform:rotateY(-90deg);
    opacity: 0;
    transition-delay: 0.2s;
    cursor: grab;
}

.project-description-box:hover > .content-box{
    transform:rotateY(0deg);
    opacity: 1;
    transition-delay: 0.2s;
    height: 100%;
    cursor: pointer;
    box-shadow: inset -4px -4px 6px rgba(255, 255, 255, 0.1),
                    inset 4px 4px 6px rgba(0, 0, 0.8);
}
</style>
