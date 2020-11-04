package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginStepDefinition2 {

	
	public WebDriver driver;
	
	@Given("^user should enter the url$")
	public void user_should_enter_the_url() throws Throwable {
		Thread.sleep(2000);
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\user\\eclipse-workspace\\FaceBook-2\\"
				+ "chrome2\\chromedriver.exe");
	  driver = new ChromeDriver();
	  driver.manage().window().maximize();
	  
	  driver.get("https://www.facebook.com/");
	}

	@When("^title of the page is facebook$")
	public void title_of_the_page_is_facebook() throws Throwable {
		Thread.sleep(2000);
	    String title = driver.getTitle();
	    
	    System.out.println(title);
	Assert.assertEquals("Facebook – log in or sign up", title);
	}

	@Then("^user should enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_should_enter_and(String email, String password) throws Throwable {
		driver.findElement(By.xpath("//*[@id='email']")).sendKeys(email);
	    driver.findElement(By.xpath("//*[@name='pass']")).sendKeys(password);	
	}

	@Then("^user should click on login button$")
	public void user_should_click_on_login_button() throws Throwable {
		Thread.sleep(2000);
		   driver.findElement(By.xpath("//*[@name='login']")).click();
    	}


}
