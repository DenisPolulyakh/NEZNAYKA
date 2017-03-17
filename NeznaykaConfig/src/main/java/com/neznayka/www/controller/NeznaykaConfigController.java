package com.neznayka.www.controller;


import com.neznayka.www.model.DictionaryMap;
import org.apache.log4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


;


/**
 * @author Denis Polulyakh
 */

@RestController
@EnableWebMvc
public class NeznaykaConfigController {
    private static final String CLASS_NAME = NeznaykaConfigController.class.getName();
    private static final Logger log = Logger.getLogger(CLASS_NAME);


    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Void> create(@RequestBody DictionaryMap dictionaryMap) {
        log.info("create "+dictionaryMap.getKey()+" "+dictionaryMap.getValue());
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

}