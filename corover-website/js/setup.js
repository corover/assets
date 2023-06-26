const header = document.createElement("header");
const footer = document.createElement("footer");
// https://cdn.jsdelivr.net/gh/corover/assets@main/corover-website/images
const headerText = `
<header>
<div class="container">
  <a href=""><img src="https://cdn.jsdelivr.net/gh/corover/assets@main/corover-website/images/logo-white.png" alt="" class="logo" /></a>

  <nav class="desktop">
    <ul>
      <li>Platform</li>
      <div class="nav-menu" id="platform">
        <a href="">
          <i class="bx bxs-plug"></i>

          <div>
            <p>Channels and Integrations</p>
            <span>Seamless connections for limitless possibilities</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-message-dots"></i>

          <div>
            <p>Languages</p>
            <span>Unlock a world of communication</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-grid"></i>

          <div>
            <p>Architecture</p>
            <span>Building Foundation for Seamless Integration</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-shield-plus"></i>

          <div>
            <p>Security</p>
            <span>Guarding Your Digital Sanctuary Securely</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-circle-three-quarter"></i>

          <div>
            <p>Analytics</p>
            <span>Unleashing Insights from Conversations</span>
          </div>
        </a>

        <a href="">
          <i class="bx bx-expand-horizontal"></i>

          <div>
            <p>Key features</p>
            <span>Innovation with Essential Features</span>
          </div>
        </a>
      </div>
      <li>Products</li>
      <div class="nav-menu" id="products">
        <a href="">
          <i class="bx bxs-chart"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>Conversational AI Platform</p>
            <span>Empowering seamless human-machine conversations</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-comment-dots"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>ChatBot as a Service (CaaS)</p>
            <span>Effortless Conversations at Your Service</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-video"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>Video Bot</p>
            <span>Enhancing Your Visual Communication Experience</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-user-voice"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>Voice Bot</p>
            <span>Converse effortlessly with voice</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxl-whatsapp"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>WhatsApp Bot</p>
            <span>Automate, connect, and streamline communication</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-message-square"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>Signal Bot</p>
            <span>Enhanced Conversations Powered by Signal</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-phone"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>IVR Bot</p>
            <span
              >Interactive voice assistance, streamlined and
              efficient</span
            >
          </div>
        </a>

        <a href="">
          <i class="bx bx-headphone"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>Live Chat</p>
            <span>Engaging, Real-Time Human Support</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-news"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>News Bot</p>
            <span>Informed conversations for news updates</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-chat"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>SMS Bot</p>
            <span>Effortless messaging, instant AI replies</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxl-instagram"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>Social Media Bot</p>
            <span>Automating Your Social Media Presence</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-envelope"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>Email Bot</p>
            <span>Automating your inbox, simplifying communication</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-spreadsheet"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>Conversational Advertisements</p>
            <span>Engage, Connect, Convert: Interactive Advertising</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-message-rounded-detail"></i>
          <box-icon name="cuboid"></box-icon>
          <div>
            <p>Google Business Messages</p>
            <span>Connect. Engage. Grow. Amplify. Simplify</span>
          </div>
        </a>
      </div>
      <li>Industries</li>
      <div class="nav-menu" id="industries">
        <a href="">
          <i class="bx bxs-cart"></i>
          <div>
            <p>E-Commerce</p>
            <span>Empowering Your E-Commerce Conversation</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-book"></i>
          <div>
            <p>Education</p>
            <span
              >Empowering Learning Through Interactive Conversations</span
            >
          </div>
        </a>

        <a href="">
          <i class="bx bxs-heart"></i>

          <div>
            <p>HealthCare</p>
            <span>Facilitating Healthcare with AI</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-shield-plus"></i>

          <div>
            <p>Insurance</p>
            <span
              >Intelligent Insurance Assistance: Simplify Coverage</span
            >
          </div>
        </a>

        <a href="">
          <i class="bx bxs-news"></i>
          <div>
            <p>News & Media</p>
            <span
              >Enhancing News Experience with Intelligent Conversations
            </span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-cuboid"></i>
          <div>
            <p>Oil & Gas</p>
            <span>Streamlining operations, powering oil and gas</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-shopping-bag"></i>
          <div>
            <p>Retail</p>
            <span>Empowering retail with intelligent chatbots</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-mobile"></i>
          <div>
            <p>Telecommunications</p>
            <span
              >Seamless connections, exceptional support,
              instantaneously</span
            >
          </div>
        </a>

        <a href="">
          <i class="bx bxs-bus"></i>
          <div>
            <p>Travel & Tourism</p>
            <span>Guiding your journeys with virtual expertise</span>
          </div>
        </a>

        <a href="">
          <i class="bx bx-rupee"></i>
          <div>
            <p>Banking & Payments</p>
            <span>
              Empowering FinTech with Intelligent Conversations</span
            >
          </div>
        </a>
      </div>
      <li>Functions</li>
      <div class="nav-menu" id="functions">
        <a href="">
          <i class="bx bxs-user"></i>

          <div>
            <p>Customer Support</p>
            <span>Seamless support through virtual assistants</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-droplet"></i>
          <div>
            <p>HR ChatBot</p>
            <span>Efficiency and Support, Powered by Conversation</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-wallet"></i>
          <div>
            <p>Sales & Marketing</p>
            <span>Boost your sales with AI assistance</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-credit-card-front"></i>
          <div>
            <p>Finance</p>
            <span>Enhancing Finance with Intelligent conversations</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-cylinder"></i>
          <div>
            <p>Industrial Bots</p>
            <span
              >Streamlining industries through intelligent chatbots</span
            >
          </div>
        </a>
      </div>
      <li>Resources</li>
      <div class="nav-menu" id="resources">
        <a href="">
          <i class="bx bxs-book-open"></i>
          <div>
            <p>Blogs</p>
            <span>Discover, Engage, and Inspire Through Words</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-bookmark"></i>
          <div>
            <p>Case Studies</p>
            <span>Success stories that speak for themselves</span>
          </div>
        </a>

        <a href="">
          <i class="bx bx-podcast"></i>
          <div>
            <p>Newsroom</p>
            <span>Unveiling Our Journey: Latest Moments Shared</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-slideshow"></i>
          <div>
            <p>Videos</p>
            <span>Watch our latest video highlights now</span>
          </div>
        </a>
      </div>
      <li>Business</li>
      <div class="nav-menu" id="business">
        <a href="">
          <i class="bx bxs-notepad"></i>
          <div>
            <p>Become a Partner</p>
            <span>Unlock success by partnering with us</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-objects-horizontal-right"></i>
          <div>
            <p>Contribute to AI Virtual Assistants</p>
            <span>Empower our AI: Join the Evolution</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-purchase-tag-alt"></i>
          <div>
            <p>Advertise With Us</p>
            <span>Amplify your brand. Advertise with us</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-user-pin"></i>
          <div>
            <p>Existing Clients & Partners</p>
            <span
              >Building Success Together, One Connection at a Time</span
            >
          </div>
        </a>
      </div>
      <li>Company</li>
      <div class="nav-menu" id="company">
        <a href="">
          <i class="bx bxs-compass"></i>
          <div>
            <p>About Us</p>
            <span>Discover Our Story, Join Our Journey</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-bookmark-alt"></i>
          <div>
            <p>Achievements</p>
            <span>Proudly showcasing our remarkable milestones</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-edit-alt"></i>
          <div>
            <p>Testimonials</p>
            <span> Voices of Delighted Customers: Hear Why</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-briefcase"></i>
          <div>
            <p>Careers</p>
            <span>Unlock Your Future with Us</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-phone-incoming"></i>
          <div>
            <p>Contact Us</p>
            <span>Reach out to us</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-terminal"></i>
          <div>
            <p>Terms & Conditions</p>
            <span>Guidelines for your seamless user experience</span>
          </div>
        </a>

        <a href="">
          <i class="bx bxs-wallet-alt"></i>
          <div>
            <p>Privacy Policy</p>
            <span>Your data. Your control. Our commitment</span>
          </div>
        </a>
      </div>
      <li><button class="primary-button">Get a Demo</button></li>
    </ul>
  </nav>
  <img src="https://cdn.jsdelivr.net/gh/corover/assets@main/corover-website/images/hamburger.png" alt="" class="hamburger" />
  <img
    src="https://cdn.jsdelivr.net/gh/corover/assets@main/corover-website/images/hamburger-close.png"
    alt=""
    class="hamburger-close"
  />
</div>
</header>
`;
document.body.innerHTML = headerText + document.body.innerHTML;
