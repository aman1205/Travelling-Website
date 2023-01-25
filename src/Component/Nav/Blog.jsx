import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div id="blog">
      <header>
        <div className="box box-nav">
          <div className="site-title">
            <h1>Living The Social Life</h1>
            <p className="subtitle">A blog exporting minimalism in life</p>
          </div>
        </div>
      </header>

      <div className="box box-flex">
        <main role="main">
          <article className="article-featured">
            <h2 className="article-title">Finding simplicity in life</h2>
            <img
              src="https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg"
              alt="greenery pic"
              className="article-image"
            />
            <p className="article-info">July 23, 2019 | 3 comments</p>
            <p className="article-body">
              Life can get complicated really quickly, but it doesn't have to
              be! There are many ways to simplify your life, a few of which
              we've explored in the past. This week we're taking a bit of a
              approach through, in how you can find simplicity in the life you
              already leaving.
            </p>
            <Link to="/" className="article-read-more">
              CONTINUE READING
            </Link>
          </article>

          <article className="article-recent">
            <div className="article-recent-main">
              <h2 className="article-title">Keeping cooking simple</h2>
              <p className="article-body">
                Food is a very important part of everyone's life. If you want to
                be healthy, you have to eat healthy. One of the easiest way to
                do that is to keep your cooking nice and simple.
              </p>
              <a href="#" className="article-read-more">
                CONTINUE READING
              </a>
            </div>

            <div className="article-recent-secondary">
              <img src="img/food.jpg" alt="" className="article-image" />
              <p className="article-info">July 19, 2019 | 3 comments</p>
            </div>
          </article>

          <article className="article-recent">
            <div className="article-recent-main">
              <h2 className="article-title">Simplicity and work</h2>
              <p className="article-body">
                Work is often a major source of stress. People get frustrated,
                it ruins their relationship with others and it leads to burnout.
                By keeping your work life as simple as possible, it will help
                balance everything out.
              </p>
              <a href="#" className="article-read-more">
                CONTINUE READING
              </a>
            </div>

            <div className="article-recent-secondary">
              <img src="img/work.jpg" alt="" className="article-image" />
              <p className="article-info">July 12, 2019 | 3 comments</p>
            </div>
          </article>

          <article className="article-recent">
            <div className="article-recent-main">
              <h2 className="article-title">Simple decoration</h2>
              <p className="article-body">
                A home isn't a home untill you've decorated a little. People
                either don't decorate, or they go overboard and it doesn't have
                the impact they were hoping for. Staying simple will help draw
                the eye where you want it to and make things pop like never
                before.
              </p>
              <a href="#" className="article-read-more">
                CONTINUE READING
              </a>
            </div>

            <div className="article-recent-secondary">
              <img src="img/deco.jpg" alt="" className="article-image" />
              <p className="article-info">July 3, 2019 | 3 comment</p>
            </div>
          </article>
        </main>

        <aside className="sidebar">
          <div className="sidebar-widget">
            <h2 className="widget-title">ABOUT ME</h2>
            <img src="img/about-me.jpg" alt="" className="widget-image" />
            <p className="widget-body">
              I find life better, and I'm happier, when things are nice and
              simple.
            </p>
          </div>

          <div className="sidebar-widget">
            <h2 className="widget-title">RECENT POSTS</h2>

            <div className="widget-recent-post">
              <h3 className="widget-recent-post-title">
                Keeping cooking simple
              </h3>
              <img src="img/food.jpg" alt="" className="widget-image" />
            </div>

            <div className="widget-recent-post">
              <h3 className="widget-recent-post-title">Simplicity and work</h3>
              <img src="img/work.jpg" alt="" className="widget-image" />
            </div>

            <div className="widget-recent-post">
              <h3 className="widget-recent-post-title">Simple decoration</h3>
              <img src="img/deco.jpg" alt="" className="widget-image" />
            </div>
          </div>
        </aside>
      </div>

      <footer>
        <p>
          <strong>Living the simple life</strong>
        </p>
        <p>Copyright &copy; 2022</p>
        <p>
          Made with <i className="fas fa-heart"></i> By Kru'Z&trade;
        </p>
      </footer>
    </div>
  );
}

export default Blog;
