export const template = `
    <div class="chat_messages_main">
        <div class="chat_messages_content">
            {{#each chat}}
                <div class="field_messages">
                
                    <div class="feed_messages__day">
                        <span>{{day}}</span>
                    </div>
                    
                    {{#each messages}}
                        {{#if interlocutor}}
                            <div class="message_list its_messages">
                                <div class="message__time">{{time}}</div>
                                <div class="message">
                                    {{#each text}}
                                       <p>{{this}}</p>
                                    {{/each}}
                                </div>
                            </div>
                        {{else}}
                            <div class="message_list my_messages">
                                <div class="message__time">{{time}}</div>
                                {{#if read}}
                                    <div class="message__readit">
                                        <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#3369F3"/>
                                            <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5.00006)" stroke="#3369F3"/>
                                            <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5.00006)" stroke="#3369F3"/>
                                        </svg>
                                    </div>
                                {{else}}
                                    <div class="message__delivered">
                                        <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#3369F3"/>
                                            <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5.00006)" stroke="#3369F3"/>
                                        </svg>
                                    </div>
                                {{/if}}
                                <div class="message">
                                    <p>{{text}}</p>
                                </div>
                            </div>
                        {{/if}}
                    {{/each}}
                
                </div>
            {{/each}}
        </div>
    </div>
`;
