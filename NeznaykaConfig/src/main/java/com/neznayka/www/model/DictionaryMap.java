package com.neznayka.www.model;

import java.util.ArrayList;

/**
 * Created by Денис on 18.03.2017.
 */
public class DictionaryMap {
    private ArrayList key;
    private String value;

    public DictionaryMap() {
    }

    public DictionaryMap(ArrayList key, String value) {
        this.key = key;
        this.value = value;
    }

    public ArrayList getKey() {
        return key;
    }

    public void setKey(ArrayList key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
