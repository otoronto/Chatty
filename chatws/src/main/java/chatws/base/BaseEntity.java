package chatws.base;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;

@MappedSuperclass
@Data
public class BaseEntity {

	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	@Column(name = "id", unique = true)
	private String id;
	
	@CreationTimestamp
	@Column(columnDefinition = "DATETIME")
	private Timestamp createDate;
	
	@UpdateTimestamp
	@Column(columnDefinition = "DATETIME")
	private Timestamp lastModifiedDate;
}
