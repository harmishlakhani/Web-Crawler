package com.webcrawler.service;

import java.io.IOException;
import java.net.ConnectException;
import java.net.HttpURLConnection;
import java.net.URL;

public class URLStatus {

	URL url;
	HttpURLConnection huc;
	
	public int getURLStatus(String urlTemp) {
		
		int responseCode = -1;
		try {
			url = new URL(urlTemp);
			huc = (HttpURLConnection) url.openConnection();
			huc.setRequestMethod("HEAD");
			responseCode = huc.getResponseCode();
			System.out.println(responseCode);
		}
		catch(ConnectException c)
		{
			responseCode = 408;
		}
		catch (IOException e) {
			e.printStackTrace();
			if(null != huc)
				huc.disconnect();
		}
		
		return responseCode;
	}
	
	public static void main(String[] args) {
		
		URLStatus obj = new URLStatus();
		//System.out.println(obj.getURLStatus("http://www.google.com"));
		System.out.println(obj.getURLStatus("https://youtube.com"));
		System.out.println(obj.getURLStatus("https://gmail.com"));
		//System.out.println(obj.getURLStatus("http://www.prashantakbari.com"));
	}
}
