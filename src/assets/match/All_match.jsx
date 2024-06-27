import React from 'react'
import './All_match.css'
import { Button, Stack, Tab, Tabs } from 'react-bootstrap'
import { Footer } from '../../componate/Footer'
import { Match_rules } from './Match_rules'

export const All_match = () => {
    return (
        <>
            <h5>MATCH</h5>
            <div className="match_list">
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-2"
                    justify
                >
                    <Tab className='continer' eventKey="ongoing" title="ONGOING">
                        <div className="match_one">
                            <div className="img_R">
                                <img src="src/assets/img/freefire.jpg" alt="" />
                            </div>
                            <div className="id_del">
                                <h6>free fire solo match #id01</h6>
                                <time>23 jun 2024  -11:40AM</time>
                            </div>
                        </div>
                        <div className="two_box">
                            <div class="box">
                                <div class="h6">
                                    <h6>wining price</h6>
                                    <p>₹501</p>
                                </div>
                                <div class="h6">
                                    <h6>par kill</h6>
                                    <p>₹8</p>
                                </div>
                                <div class="h6">
                                    <h6>entry fee</h6>
                                    <p>₹15</p>
                                </div>
                            </div>
                            <div class="box">
                                <div class="h6">
                                    <h6>type</h6>
                                    <p>SOLO</p>
                                </div>
                                <div class="h6">
                                    <h6>version</h6>
                                    <p>TPP</p>
                                </div>
                                <div class="h6">
                                    <h6>map</h6>
                                    <p>BERMUNDA</p>
                                </div>
                            </div>
                        </div>

                        <div className="btn_R">
                            <Stack direction="horizontal" gap={1}>
                                <Button onClick={Match_rules} as="a" variant="primary">
                                    JOIN NOW
                                </Button>
                                <a href="/Match_rules"><button>Match Detials</button></a>
                                <Button as="a" variant="success">
                                    WATCH MATCH
                                </Button>
                            </Stack>
                        </div>
                    </Tab>
                    <Tab eventKey="upcoming" title="UPCOMING">
                        <div className="match_one">
                            <div className="img_R">
                                <img src="src/assets/img/freefire.jpg" alt="" />
                            </div>
                            <div className="id_del">
                                <h6>free fire solo match #id01</h6>
                                <time>23 jun 2024  -11:40AM</time>
                            </div>
                        </div>
                        <div class="box">
                            <div class="h6">
                                <h6>wining price</h6>
                                <p>₹501</p>
                            </div>
                            <div class="h6">
                                <h6>par kill</h6>
                                <p>₹8</p>
                            </div>
                            <div class="h6">
                                <h6>entry fee</h6>
                                <p>₹15</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="h6">
                                <h6>type</h6>
                                <p>SOLO</p>
                            </div>
                            <div class="h6">
                                <h6>version</h6>
                                <p>TPP</p>
                            </div>
                            <div class="h6">
                                <h6>map</h6>
                                <p>BERMUNDA</p>
                            </div>
                        </div>

                        <div className="btn_R">
                            <Stack direction="horizontal" gap={2}>
                                <Button as="a" variant="primary">
                                    JOIN NOW
                                </Button>
                                <Button as="a" variant="success">
                                    SHOW PASS
                                </Button>
                            </Stack>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <Footer />
        </>
    )
}
