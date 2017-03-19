package com.neznayka.www.processor;

import com.neznayka.www.dao.config.ConfigDictionaryDAOIntf;
import com.neznayka.www.hibernate.Message;
import com.neznayka.www.hibernate.Tag;
import com.neznayka.www.utils.BotUtilMethods;

import java.util.List;
import java.util.logging.Logger;

/**
 * @author Polulyakh Denis
 * @date 19.03.2017
 */
public class PhraseProcessor {
    private static final String CLASS_NAME = "PhraseProcessor";
    private static final Logger log = Logger.getLogger(CLASS_NAME);
    private ConfigDictionaryDAOIntf configDAO;

    public String getMessageToAnswer(String message) {
        final String METHOD_NAME = "getMessageToAnswer";
        String text = BotUtilMethods.getPropertyFromJSON(message,"text");
        log.info(CLASS_NAME + " " + METHOD_NAME + " question: " + text);
        text =  BotUtilMethods.replaseSymbols(text);

        List<Message> listMessage = configDAO.listMessage();
        for(Message m:listMessage){
            List<Tag> tagList = m.getTags();
            int k = 0;
            for(Tag t:tagList){
                if(text.contains(t.getTag())){k++;}
            }

        }


        return "Привет";
    }


    public void setConfigDAO(ConfigDictionaryDAOIntf configDAO) {
        this.configDAO = configDAO;
    }
}