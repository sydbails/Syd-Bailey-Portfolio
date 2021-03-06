import React from "react";
import { Link } from "react-router-dom";
import { Segment, Grid, Image, Icon, Modal, Header } from "semantic-ui-react";
import forwardmessageicon from "../icons/forwardmsgicon.png";
import bookmarkicon from "../icons/bookmarkicon.png";

let div;

const ContactMe = () => {
  function handleForwarding() {
    const subject = "Look at this Software Engineers' Profile!";
    window.open(
      "mailto:" +
        "" +
        "?cc=" +
        "" +
        "&subject=" +
        subject +
        "&body=" +
        `${emailBody}`
      // "A young software engineer, Syd Bailey, made this incredible portfolio. Can you guess what she's paying homage too? I've copy/pasted the link below -- click on 'Messages' at the top to send her a message!     http://syd-bailey-resume.herokuapp.com"
    );
  }

  function emailBody() {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let link = document.createElement("a");
    link.setAttribute("href", "http://syd-bailey-resume.herokuapp.com");
    let text = document.createTextNode(
      "A young software engineer, Syd Bailey, made this incredible portfolio. Can you guess what she's paying homage too? I've copy/pasted the link below -- click on 'Messages' at the top to send her a message!"
    );
    p.appendChild(text);
    p.appendChild(link);
    div.appendChild(p);
    div.setAttribute("id", "div");
    console.log(div);
    return div.innerHTML;
  }

  return (
    <div id="contactMe">
      <Segment attached="top" id="details">
        <b>Contact Me</b>
      </Segment>
      <Segment
        attached="bottom"
        style={{ fontSize: "12px" }}
        id="pagecontainer"
      >
        <Grid columns={2}>
          <Grid.Column tablet={8}>
            <p style={{ padding: "5%", marginBottom: "0" }}>
              <a
                href="https://www.github.com/sydbails"
                style={{ color: "black" }}
              >
                <Icon name="github" />
                Github
              </a>
            </p>

            <p style={{ padding: "5%", marginBottom: "0" }}>
              <a
                href="https://www.linkedin.com/in/sydbailey"
                style={{ color: "black" }}
              >
                <Icon name="linkedin" />
                LinkedIn
              </a>
            </p>
          </Grid.Column>
          <Grid.Column tablet={8}>
            <p style={{ padding: "5%", marginBottom: "0" }}>
              <Image src={forwardmessageicon} floated="left" id="imageicons" />
              <Link
                floated="right"
                onClick={handleForwarding}
                style={{ color: "black" }}
              >
                {" "}
                Forward
              </Link>
            </p>
            <p style={{ padding: "5%", marginBottom: "0" }}>
              <Image src={bookmarkicon} floated="left" id="imageicons" />
              <Modal
                trigger={
                  <Link floated="right" style={{ color: "black" }}>
                    {" "}
                    Bookmark
                  </Link>
                }
                closeIcon
              >
                <Header icon="star outline" content="Rad!" />
                <Modal.Content>
                  <p>
                    Looks like you want to add me as your favorite -- how kind!
                    You can 'bookmark' this page by pressing the star icon near
                    the url in your browser. Otherwise, head over to the
                    'messages' tab and let me know why I'm your fave!
                  </p>
                </Modal.Content>
              </Modal>
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default ContactMe;
