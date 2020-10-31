<template>
  <div class="home">
    <div id="top">
      <h1>Build Wonderful<br>Web-Stuff</h1>
      <div class="links">
        <router-link to="/docs">DOCS</router-link>
        <a href="https://github.com/JavaWebStack">GITHUB</a>
      </div>
      <svg width="104" height="97" viewBox="0 0 104 97" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="45" width="46" height="52"><path d="M26 45L37.18 51.6357L48.5167 58L48.36 71L48.5167 84L37.18 90.3643L26 97L14.82 90.3643L3.48334 84L3.64 71L3.48334 58L14.82 51.6357L26 45Z" fill="#C4C4C4"/></mask><g mask="url(#mask0)"><path d="M26 45L37.18 51.6357L48.5167 58L48.36 71L48.5167 84L37.18 90.3643L26 97L14.82 90.3643L3.48334 84L3.64 71L3.48334 58L14.82 51.6357L26 45Z" fill="#60A8FD"/><rect x="26" y="58.1287" width="22.9109" height="58.1782" fill="#5FA4F5"/><path d="M26 19L37.18 25.6357L48.5167 32L48.36 45L48.5167 58L37.18 64.3643L26 71L14.82 64.3643L3.48334 58L3.64 45L3.48334 32L14.82 25.6357L26 19Z" fill="#599CEB"/></g><mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="55" y="45" width="46" height="52"><path d="M78 45L89.18 51.6357L100.517 58L100.36 71L100.517 84L89.18 90.3643L78 97L66.82 90.3643L55.4833 84L55.64 71L55.4833 58L66.82 51.6357L78 45Z" fill="#C4C4C4"/></mask><g mask="url(#mask1)"><path d="M78 45L89.18 51.6357L100.517 58L100.36 71L100.517 84L89.18 90.3643L78 97L66.82 90.3643L55.4833 84L55.64 71L55.4833 58L66.82 51.6357L78 45Z" fill="#60A8FD"/><rect x="78" y="58.1287" width="22.9109" height="58.1782" fill="#5FA4F5"/><path d="M78 19L89.18 25.6357L100.517 32L100.36 45L100.517 58L89.18 64.3643L78 71L66.82 64.3643L55.4833 58L55.64 45L55.4833 32L66.82 25.6357L78 19Z" fill="#599CEB"/></g><mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="29" y="0" width="46" height="52"><path d="M52 0L63.18 6.63567L74.5167 13L74.36 26L74.5167 39L63.18 45.3643L52 52L40.82 45.3643L29.4833 39L29.64 26L29.4833 13L40.82 6.63567L52 0Z" fill="#C4C4C4"/></mask><g mask="url(#mask2)"><path d="M52 0L63.18 6.63567L74.5167 13L74.36 26L74.5167 39L63.18 45.3643L52 52L40.82 45.3643L29.4833 39L29.64 26L29.4833 13L40.82 6.63567L52 0Z" fill="#60A8FD"/><rect x="52" y="13.1287" width="22.9109" height="58.1782" fill="#5FA4F5"/><path d="M52 -26L63.18 -19.3643L74.5167 -13L74.36 0L74.5167 13L63.18 19.3643L52 26L40.82 19.3643L29.4833 13L29.64 0L29.4833 -13L40.82 -19.3643L52 -26Z" fill="#599CEB"/></g></svg>
    </div>
    <div id="example">
            <div id="code-block">        
            <code><pre>public class Text {
  public static void main(String[] args){
    System.out.println("hi");
  }
}           </pre></code>

      </div>
      <div id="description">
        <h1>Example Text</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
#top {
  max-width: 700px;
  margin: auto;
  margin-top: 130px;
  h1 {
    font-size: 70px;
    margin-bottom: 20px;
    color: #323232;
  }
  .links {
    a, a:link {
      color: #60A8FD;
      margin-right: 10px;
      text-decoration: none;
      font-size: 28px;
      font-weight: 700;
    }
  }
  svg {
    position: relative;
    bottom: 160px;
    left: 10px;
    float: right;
    width: 210px;
    height: 210px;
  }
}

#example {
  width: 100%;
  margin-top: 200px;
  margin-bottom: 100px;
  #description {
    width: 47%;
    h1 {
      font-size: 40px;
      margin-bottom: 20px;
      color: #434343;
    }
    p {
      color: #434343;
      font-size: 26px;
      font-weight: 700;
    }
  }
  #code-block {
    background: #252539;
    left: 50%;
    color: #FFF;
    border-radius: 10px;
    padding: 15px;
    width: 600px;
    float: right;
    position: absolute;
    margin-left: 120px;
    margin-top: 100px;
    code {
      pre {
        font-size: 24px;
      }
    }
  }
}
</style>