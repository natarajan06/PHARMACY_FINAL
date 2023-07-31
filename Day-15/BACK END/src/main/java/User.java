import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User {
	@Id
	private String email;
	private String name;
	private long contact;
	private String password;
	
	public User()
	{
		
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "user [name=" + name + ", contact=" + contact + ", email=" + email + ", password=" + password
				+ "]";
	}
	
	public User(String name, long contact, String email, String password) {
		super();
		this.name = name;
		this.contact = contact;
		this.email = email;
		this.password = password;
	}
	
}
