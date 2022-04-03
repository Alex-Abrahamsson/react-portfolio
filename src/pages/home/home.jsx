import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsCodeSlash, BsDisplay, BsMusicNoteBeamed, BsHammer, BsGithub, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

import style from "./home.module.scss";

function Home() {
  return (
    <Container fluid>
      <Row>
        <div className={style.MyNameContainer}>
          <div className={style.BoxBorderDiv}>
            <h3>Alex Abrahamsson</h3>
          </div>
        </div>
        <Col>
          <Row className={style.RightBorderContainer}>
            <div className={style.SmallContainerLeft}>
              <div className={style.ColoredDiv}>
                <strong>SUMMARY</strong>
              </div>
            </div>
            <p>
              Been working as welder in an industrial workshop for most of my
              adult life, mostly becouse it´s been "The safe choice".
              <br />
              I´ve always been interested in computers but i never dared to
              persuit a carrier in that genre, but 2019 when Covid forced us all
              to change our daily rutines i jump on the oppertunity and started
              to study.
              <br /> I quickly fell in love with programming and the rest is
              history.
            </p>
          </Row>
          <Row className={style.RightBorderContainer}>
            <div className={style.BoxBorderDiv}>
              <h5>EDUCATION</h5>
            </div>
          </Row>
          <Row className={style.RightBorderContainer}>
            <ul>
              <li className={style.CenteredList}>
                <strong>2019 - 2022</strong>
                <br />
                <em>Yrkeshögskolan, Full stack .Net Developer</em>
              </li>
              <li className={style.CenteredList}>
                <strong>2018 - 2019</strong>
                <br />
                <em>Hermods, Programming 1</em>
              </li>
              <li className={style.CenteredList}>
                <strong>1999 - 2001</strong>
                <br />
                <em>Polhem, Teknik Process Produktion</em>
              </li>
            </ul>
          </Row>
          <Row className={style.RightBorderContainer}>
            <div className={style.BoxBorderDiv}>
              <h5>SKILLS</h5>
            </div>
          </Row>
          <Row>
            <Col xs={4}>
              <p className={style.SkillListP}>C#</p>
            </Col>
            <Col xs={8}>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p className={style.SkillListP}>C++</p>
            </Col>
            <Col xs={8}>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p className={style.SkillListP}>HTML</p>
            </Col>
            <Col xs={8}>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p className={style.SkillListP}>Css / sCss</p>
            </Col>
            <Col xs={8}>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p className={style.SkillListP}>JavaScript</p>
            </Col>
            <Col xs={8}>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p className={style.SkillListP}>React</p>
            </Col>
            <Col xs={8}>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p className={style.SkillListP}>SQL</p>
            </Col>
            <Col xs={8}>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p className={style.SkillListP}>Entity Framework</p>
            </Col>
            <Col xs={8}>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p className={style.SkillListP}>Azure</p>
            </Col>
            <Col xs={8}>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p className={style.SkillListP}>Unreal Engine</p>
            </Col>
            <Col xs={8}>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p className={style.SkillListP}>Unity</p>
            </Col>
            <Col xs={8}>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.FilledDot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
              <span className={style.Dot}></span>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row className={style.LeftBorderContainer}>
            <div className={style.SmallContainerRight}>
              <div className={style.ColoredDiv}>
                <strong>CONTACT ME</strong>
              </div>
            </div>
            <ul style={{ marginLeft: "20px" }}>
              <li>E-mail: Alex.Abrahamsson@gmail.com</li>
              <li>Mobile: 072-xxx xx 94</li>
              <li>Website: www.AlexAbrahamsson.com</li>
            </ul>
          </Row>
          <Row className={style.LeftBorderContainer}>
            <div className={style.BoxBorderDiv}>
              <h5>EXPERIENCE</h5>
            </div>
          </Row>
          <Row className={style.LeftBorderContainer}>
            <ul>
              <li className={style.CenteredList}>
                <strong>2018 - Present</strong>
                <br />
                <span>Indy game development</span>
                <br />
                <span>Creating webpages</span>
                <br />
                <span>Workig on my own application</span>
              </li>
              <li className={style.CenteredList}>
                <strong>2008 - 2021</strong>
                <br />
                <span>13 years as welder/blacksmith</span>
              </li>
              <li className={style.CenteredList}>
                <strong>2001 - 2008</strong>
                <br />
                <span>Working at ICA and other service jobs</span>
                <br />
                <span>Docks worker, container boats</span>
                <br />
                <span>Firefighter at F4, Military service</span>
              </li>
            </ul>
          </Row>
          <Row className={style.LeftBorderContainer}>
            <div className={style.BoxBorderDiv}>
              <h5>INTERESTS</h5>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <BsCodeSlash className={style.MyIcons} />
              <BsDisplay className={style.MyIcons} />
              <BsMusicNoteBeamed className={style.MyIcons} />
              <BsHammer className={style.MyIcons} />
            </div>
          </Row>
          <Row className={style.LeftBorderContainer}>
            <div className={style.BoxBorderDiv}>
              <h5>SOCIALS</h5>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <BsGithub className={style.MyIcons} />
              <BsFacebook className={style.MyIcons} />
              <BsInstagram className={style.MyIcons} />
              <BsLinkedin className={style.MyIcons} />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;